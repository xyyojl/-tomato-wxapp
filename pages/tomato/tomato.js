// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSecond: 9,
    time: "",
    timer: null,
    timerStatus: 'stop',
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },
  processSecond(){
    let m = Math.floor(this.data.defaultSecond / 60)
    let s = Math.floor(this.data.defaultSecond % 60)
    if( s === 0 ){ s = "00" }
    if ((m + "").length === 1) { m = "0" + m }
    if ((s + "").length < 2) { s = "0" + s}
    this.setData({time:`${m}:${s}`})
  },
  // 下面两个是关于是否开启定时器的函数
  startTimer(){
    this.setData({ timerStatus: 'start' })
    this.processSecond()
    this.data.timer = setInterval(() => {
      this.data.defaultSecond -= 1
      this.processSecond()
      if (this.data.defaultSecond <= 0) {
        this.clearTimer()
        this.setData({ againButtonVisible: true })
        this.setData({ finishConfirmVisible: true })
        return;
      }
    }, 1000)
  },
  clearTimer() {
    this.setData({ timerStatus: 'stop' })
    clearInterval(this.data.timer)
    this.data.timer = null
  },
  // 再来一组
  againTimer(){
    this.data.defaultSecond = 9
    this.setData({againButtonVisible:false})
    this.startTimer()
  },
  // 点击放弃按钮触发的函数 需要清除定时器
  showConfirm(){
    this.setData({ confirmVisible : true})
    this.clearTimer()
  },
  // 下面是关于点击放弃，出现的 confirm的两个函数
  confirmAbandon(event){
    let content = event.detail
    // 回到首页
    wx.navigateBack({
      delta: 1
    })
  },
  // 需要重启定时器
  hideConfirm(){
    this.setData({ confirmVisible: false })
    this.startTimer()
  },
  // 番茄钟倒计时结束出现的 confirm 组件绑定的函数
  confirmFinsh(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({ finishConfirmVisible: false })
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
    this.startTimer()
    this.processSecond()
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