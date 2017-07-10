'use strict'
var token = require('../util/token.js');
module.exports = {
  // 创建一个token
  createToken: (obj) => {
    return token.createToken(obj,86400);
  },
  checkToken: (tk) => {
    return token.checkToken(tk);
  },
  checkLogin: (req, res, next) => {
  if (!req.session.user) {
    req.flash('error', '未登录');
    return res.redirect('/signin');
  }
  next();
}

};
