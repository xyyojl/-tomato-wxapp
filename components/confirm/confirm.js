Component({
  properties: {
    placeholder:{
      type: String,
      value:''
    },
    visible:{
      type: Boolean,
      value: true
    },
    value:{
      type: String,
      value: ''
    }
  },
  data:{
    _value: ''
  },
  lifetimes: {
    attached() {
      if (this.properties.value) {
        // 当没有传递value时，进行赋值
        this.properties.value = this.data._value
      }
    }
  },
  methods:{
    confirm(){
      this.triggerEvent('confirm', this.data._value)
    },
    cancel(){
      this.triggerEvent('cancel','取消')
    },
    watchValue(event){
      this.data._value = event.detail.value;
    }
  }
})