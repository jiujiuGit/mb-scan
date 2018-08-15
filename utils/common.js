var config = require('../config.js');

var apiUrls = {
  production: "https://cha.meitesibangwei.com.cn"
}

module.exports = {
  "domain": apiUrls[config.env] || apiUrls.production
  
}