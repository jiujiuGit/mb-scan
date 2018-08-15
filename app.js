//app.js
var common = require("utils/common");
var domain = common.domain;
var util = require("./utils/util.js")
const ald = require('./utils/ald-stat.js')
App({
  onLaunch: function () {
  },
  request: function (options) {
    var url = util.formatUrl(options.url);
    options.url = (domain + url + 'scan');
    var success = options.success;
    var self = this;
    options.success = function (res) {
      success(res);
    }
    wx.request(options);
  },
  globalData: {
    userInfo: null
  }
})