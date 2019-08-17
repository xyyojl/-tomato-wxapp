// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    condition: true,
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    str:'我是一段信息'
  },
  reverseStr(){
    this.data.str = this.data.str.split('').reverse().join('')
    this.setData({ str: this.data.str })
  },
  pushItem(){
    // 微信小程序使用不了push()方法
    /* var array = this.data.array
    var last = array[array.length-1]
    var newItem = last + 1
    this.setData({ array: array.push(newItem)}) */
    var array = this.data.array
    var last = array[array.length - 1] + 1
    var newArr = [last]
    array = array.concat(newArr)
    this.setData({ array: array })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 改变 data 里面的变量
    this.setData({str:'123123123'})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})