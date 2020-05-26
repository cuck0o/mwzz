// pages/fun1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showPic: function () {
    wx.previewImage({
      current: 'https://6d77-mwzz-zhd4u-1302128239.tcb.qcloud.la/fun1_eg.jpg?sign=c9af9ecafa432f308ef96f31fa18e064&t=1590479652', // 当前显示图片的http链接
      urls: ['https://6d77-mwzz-zhd4u-1302128239.tcb.qcloud.la/fun1_eg.jpg?sign=c9af9ecafa432f308ef96f31fa18e064&t=1590479652'] // 需要预览的图片http链接列表
    })
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