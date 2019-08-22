const { http } = require('../../lib/http.js')
Page({
  // 下面两项，更新一个todo内容，发请求需要使用到
  updateId: '',
  updatIndex: '',
  data: {
    lists:[],
    visibleCreateConfirm: false,
    visibleUpdateConfirm: false,
    updateContent: '',
    selectTab:''
  },
  onShow: function () {
    http.get('/todos?completed=false').then(response => {
      this.setData({ lists: response.data.resources })
    })
    if(!this.data.lists.length){
      this.setData({ selectTab: ''})
    }
  },
  confirmCreateTodo(event){
    let content = event.detail;
    if(content){
      http.post('/todos',{
        description: content, completed: false
      })
        .then(response  => {
          let todo = [response.data.resource]
          this.data.lists = todo.concat(this.data.lists)
          this.setData({ lists: this.data.lists })
          this.hideCreateConfirm()
        })
    }
  },
  deleteTodo(event){
    let {index,id} = event.currentTarget.dataset
    this.setData({ selectTab: index})
    http.put(`/todos/${id}`,{
      completed: true
    }).then(response => {
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists }) 
      this.setData({ selectTab: ''})
      wx.showToast({
        title: '确认完成',
        icon: 'success',
        duration: 1000
      })
    })
  },
  hideCreateConfirm(){
    this.setData({ 'visibleCreateConfirm':false })
  },
  showCreateConfirm(){
    this.setData({ 'visibleCreateConfirm': true })
  },
  changeText(event){
    // 更新todo
    let { index, id, content } = event.currentTarget.dataset
    this.updateId = id
    this.updatIndex = index
    this.setData({ 'visibleUpdateConfirm': true, updateContent: content })
  },
  confirmUpdate(event){
    // 将更新后的todo发送给后台
    let content = event.detail
    this.setData({ 'visibleUpdateConfirm': false})
    http.put(`/todos/${this.updateId}`,{
      description: content
    })
      .then(response => {
        let todo = response.data.resource
        this.data.lists[this.updatIndex] = todo
        this.setData({ lists: this.data.lists})
        this.hideUpdateConfirm()
      })
  },
  hideUpdateConfirm(){
    this.setData({ 'visibleUpdateConfirm': false })
  }
})