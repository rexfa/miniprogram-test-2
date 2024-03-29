// pages/itemlist/itemlist.js
Page({

  /**
   * 试验动态加载自定义控件
   * https://blog.csdn.net/Charles_Tian/article/details/80343540
   * https://blog.csdn.net/mushui0633/article/details/77863485
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    
    itemDataArray: [{ id: 'a', picURL: 'https://img14.360buyimg.com/n0/jfs/t1/50726/15/1257/215083/5cef90f6Efef722f6/acc3a18650404548.jpg' },
      { id: 'b', picURL: 'http://img.redocn.com/sheji/20171018/tiqianyifenzhongweixinxiaogushichangtu_8171981.jpg' },
      { id: 'c', picURL: 'http://img.redocn.com/sheji/20171018/tiqianyifenzhongweixinxiaogushichangtu_8171981.jpg' },
      { id: 'd', picURL: 'https://img14.360buyimg.com/n0/jfs/t1/42514/38/7006/174989/5d089c7dEc2593f3f/f7b38dfa82781d9b.jpg' },
      { id: 'e', picURL: 'https://img14.360buyimg.com/n0/jfs/t1/64026/10/241/264032/5ce62cfbE250b1d42/cd22f49cec316f07.jpg' }
    ],
    listArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    var id = 1;
    wx.request({
      url: 'https://wxapp.rexfa.cc/api/MPDataAIP/'+id,
      method:'get',
      header:{'content-type':'application/json'},
    complete:function(res){
      console.log('requst complete!')
    },
    success:function(res){
      page.setData({ itemDataArray : res.data});
      
      console.log(res.data)
    }}
    )},
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addList:function(){
    var la = this.data.listArray
    let l = { id: 'a', data: this.data.itemDataArray };
    la.push(l);
    this.setData({ listArray:la});
    //console.info(this.data.listArray);
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