// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:'tomato',
    lists: {
      "本周四": [
        { time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 1 },
        { time: "14:00", text: "我不去想是否能够成功，既然选择了远方，便只顾风雨兼程！", id: 4 }
      ],
      "本周五": [{ time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 2 }],
      "本周天": [{ time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 3 }],
      "本周一": [{ time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 3 }],
      "本周二": [{ time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 3 }],
      "本周三": [{ time: "14:00", text: "快乐不是因为得到的多而是因为计较的少！", id: 3 }],
    }
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({tab:name})
    console.log(name)
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