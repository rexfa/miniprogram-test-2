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
    listArray:['a'],
    array: [{ id: 'a', pic: 'https://img14.360buyimg.com/n0/jfs/t1/50726/15/1257/215083/5cef90f6Efef722f6/acc3a18650404548.jpg' },
    { id: 'b', pic: 'http://img.redocn.com/sheji/20171018/tiqianyifenzhongweixinxiaogushichangtu_8171981.jpg' },
    { id: 'c', pic: 'http://img.redocn.com/sheji/20171018/tiqianyifenzhongweixinxiaogushichangtu_8171981.jpg' },
    { id: 'd', pic: 'https://img14.360buyimg.com/n0/jfs/t1/42514/38/7006/174989/5d089c7dEc2593f3f/f7b38dfa82781d9b.jpg' },
    { id: 'e', pic: 'https://img14.360buyimg.com/n0/jfs/t1/64026/10/241/264032/5ce62cfbE250b1d42/cd22f49cec316f07.jpg' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addList:function(){
    let l = new ilist();
    l.listdata = this.data.array;
    this.listContainer.push(l);
    
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