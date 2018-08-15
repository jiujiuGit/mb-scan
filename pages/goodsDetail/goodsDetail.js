// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://pic.banggo.com/sources/images/goods/MC/559627/559627_00.jpg?x-oss-process=image/resize,m_pad,w_500,h_500',
      'http://pic.banggo.com/sources/images/goods/MC/559627/559627_30.jpg?x-oss-process=image/resize,m_pad,w_500,h_500',
      'http://pic.banggo.com/sources/images/goods/MC/559627/559627_32.jpg?x-oss-process=image/resize,m_pad,w_500,h_500'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500,
    currentIndicator:1
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
  pickCoupon:function(){
    this.showModal();
  },
  // 显示遮罩层
  showModal:function(){
    let animation = wx.createAnimation({
      duration:100,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  // 隐藏遮罩层
  hideModal: function () {
    
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
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
  swiperChange:function(e){
    this.setData({
      currentIndicator: e.detail.current+1
    })
    // console.log(e.detail.current)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})