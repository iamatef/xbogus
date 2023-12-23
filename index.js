// index.js
const sign = require('./xbogus');

module.exports = function (url, userAgent) {
  return sign(url.split("?")[1], userAgent);
};
