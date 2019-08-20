const { http } = require('../../lib/http.js')
const { app_id, app_secret } = getApp().globalData

Page({
  
  /**
   * 页面的初始数据
   */
  data: {

  },
  // 实现步骤：点击按钮 => 调用小程序原生的 wx.login => http.post => 返回 user 
  // => 保存 user => 返回首页
  login(event){
    let encrypted_data = event.detail.encryptedData
    let iv = event.detail.iv
    let code
    wx.login({
      success(res) {
        code = res.code
        http.post('/sign_in/mini_program_user',{
          code,
          iv,
          encrypted_data,
          app_id,
          app_secret
        })
          .then(response => {
            console.log(response)
            wx.setStorageSync('me', response.data.resource)
            wx.setStorageSync('X-token', response.header['X-token'])
            wx.reLaunch({
              url: '/pages/home/home',
            })
        })
      }
    })
  },
})