// components/itemlist/itemlist.js
Component({
  /**
   * 组件的属性列表
   * https://developers.weixin.qq.com/community/develop/doc/0004605e93c970557b47d50ea5b004
   */
  behaviors: [],
  properties: {
    listdata: {
      type: Array,
      value: []
    },
    votedata:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    listArray: []
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created(){
      console.info("ilist created.")
      console.info(this.properties.listdata);
      //var la = this.data.listArray
      //let l = { id: 'a', data: this.itemDataArray };
      //la.push(l);
      //this.setData({ listArray: listdata });    
    },
    attached() {
      console.info("ilist created.")
      console.info(this.properties.listdata);
     },
    moved() { },
    detached() { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    vote:function(e) {
      this.setData({
        is_show: e.detail.val
      });
      console.info(this.data.is_show);
    },
  }
})
