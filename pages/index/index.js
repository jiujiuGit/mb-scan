// pages/scan/scan.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    word:"正在识别...",
    placeholder:"输入条码搜索"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: function (res) {
        console.log(res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          console.log(1)
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              app.globalData.userInfo = res.userInfo;
              console.log(app.globalData.userInfo)
            }
          })
        }else{
          wx.reLaunch({
            url: '../authorization/authorization',
          })
        }
      }
    }) 
    
  },
  loadLocation :function(){
    this.setData({
      "word": "正在识别..."
    })
    this.onShow()
  },
  bindblur : function(){
    this.setData({
      placeholder: "输入条码搜索"
    })
  },
  bindfocus : function(){
    this.setData({
      placeholder :""
    })
  },
  scan: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        wx.navigateTo({
          // url: '/pages/detail/detail?id=' + res.result,
          url:'/pages/goodsDetail/goodsDetail'
        })
      },
      fail: (res) => {
        console.log(res)

      }
    })
  },
  bindconfirm : function(e){
    var id = e.detail.value;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
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
    var $this = this;
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        app.request({
          method: "post",
          url: "/location/",
          header: {
            'content-type': 'application/json'
          },
          data: {
            location: res
          },
          success: function (res) {
            if (res.data.code == 1) {
              
              $this.setData({
                "word": res.data.data.name
              })
            } else {
              $this.setData({
                "word": res.data.msg
              })
            }


          }
        })
      },
      fail: res => {
        this.setData({
          word: "定位失败"
        })
      }
    })
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