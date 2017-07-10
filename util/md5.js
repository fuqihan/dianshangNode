
var  cryptoMd5 = require("crypto-js/md5");
let md5 = (msg) => {
  return cryptoMd5(msg).toString();
}

module.exports = md5
