const app = getApp()

Page({
  data: {
    isAuth: false
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