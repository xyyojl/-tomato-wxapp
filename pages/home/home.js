// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      { id: 1, text: '快乐不是因为得到的多而是因为计较的少！', finished: true },
      { id: 2, text: '我不去想是否能够成功，既然选择了远方，便只顾风雨兼程！', finished: false },
      { id: 3, text: '如果心胸不似海，又怎能有海一样的事业。', finished: true },
      { id: 4, text: '学习要加，骄傲要减，机会要乘，懒惰要除', finished: false },
      { id: 5, text: '你可以很有个性，但某些时候请收敛。', finished: false }
    ],
    visibleConfirm:false
  },
  confirmCreateTodo(event){
    let content = event.detail;
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists})
      this.hideConfirm()
    }
  },
  deleteTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists}) 
  },
  hideConfirm(){
    this.setData({ 'visibleConfirm':false })
  },
  showConfirm(){
    this.setData({ 'visibleConfirm': true })
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