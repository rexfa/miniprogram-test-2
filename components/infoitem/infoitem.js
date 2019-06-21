// components/infoitem/infoitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    infoid: {
      type: Object,
      value: [],
      observer: function (newVal, oldVal) {console.info(newVal) }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    vote: function (data) {
      // 自定义组件向父组件传值 
      let val = data,
        vote_event_detail = {
          val: this.properties.infoid.id
        }
      // voteforme自定义名称事件，父组件中使用
      this.triggerEvent('voteforme', vote_event_detail)
      /*
        在父组件中写上bind:voteforme="vote",在父组件中就需要调用vote事件
      */
    },
  }
})
