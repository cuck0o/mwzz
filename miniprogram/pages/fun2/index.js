// pages/fun2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  showPic: function () {
    wx.previewImage({
      current: 'https://6d77-mwzz-zhd4u-1302128239.tcb.qcloud.la/fun2_eg.jpg?sign=f0eaab2c11c5a4c087a0ae98d8ef4dfe&t=1590482616', // 当前显示图片的http链接
      urls: ['https://6d77-mwzz-zhd4u-1302128239.tcb.qcloud.la/fun2_eg.jpg?sign=f0eaab2c11c5a4c087a0ae98d8ef4dfe&t=1590482616'] // 需要预览的图片http链接列表
    })
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