// pages/detail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price :"",
    name :"",
    none :""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var $this = this;
    wx.getLocation({
      type: 'wgs84',
      success: res =>{
        app.request({
          method: "post",
          url: "/scan/",
          header: {
            'content-type': 'application/json'
          },
          data: {
            sku: id,
            location : res
          },
          success: function (res) {
            if (res.data.code == 1) {
              
              $this.setData({
                price : "￥"+res.data.data.price,
                name : res.data.data.name
              })
            } else {
              $this.setData({
                none :"none",
                price : res.data.msg
              })
            }


          }
        })
      }
    })
    
  },
  scan: function () {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userLocation']) {
          wx.scanCode({
            onlyFromCamera: true,
            success: (res) => {
              var id = res.result;
              wx.redirectTo({
                url: '/pages/detail/detail?id=' + id,
              })
            },
            fail: (res) => {
              console.log(res)

            }
          })
        } else {
          wx.openSetting({
            success: (res) => {

            }
          })
        }
      }
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