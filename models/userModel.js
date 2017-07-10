'use strict'
var users = require('../mongo/mongo.js').users;
var md5 = require('../util/md5.js');
module.exports = {
  //添加users
  addUsers: (obj) => {
    let obj2 = {
      name: obj.name,
      password: md5(obj.password),
      tel: obj.tel,
      createDate: new Date(new Date().getTime() + 28800000)
    }
    users.create(obj2);
  },
  //查找所有的users
  findUser: () => {
    return users.find({}).exec().then(function(data) {
       return data
    })
  },
  postLogin: (obj) => {
    return users.findOne({name: obj.username,password: md5(obj.password)}).exec().then(function(data) {
       return data
    })
  }
}
