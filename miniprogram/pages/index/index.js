const app = getApp()

Page({
  data: {
    titles: '<p style="display:inline-block;color:orange">H</p>' +
      '<p style="display:inline-block;color:red">E</p>' +
      '<p style="display:inline-block;color:green">L</p>' +
      '<p style="display:inline-block;color:orange">L</p>' +
      '<p style="display:inline-block;color:black">O</p>' +
      '<p style="display:inline-block;color:blue">， </p>' +
      '<p style="display:inline-block;color:black">欢迎使用咸鱼定制</p>',
    isAuth: false,
    popShow: false
  },

  onLoad: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                isAuth: true
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      this.setData({
        isAuth: true
      });
    }
  },

  onGetOpenid: function () {},

})