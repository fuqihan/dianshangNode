'use strict'
var shops = require('../mongo/mongo.js').shops;
module.exports = {
  //添加users
  addShops: () => {
    const shopData = [
   {
     shopUrl: 'http://ospevghkp.bkt.clouddn.com/568c7d12N18c9df53.jpg%21q90.webp',
     shopName: '上海绿源(SHLY) 节能灯 E27 灯泡 白炽灯色 U型 3U18W 色温2700K 黄光',
     shopPrice: '12.90',
     createDate: new Date(new Date().getTime() + 28800000)
   }
 ]
    shops.create(shopData);
  },
  //查找所有的users
  findShops: () => {
    return shops.find({}).exec().then(function(data) {
       return data
    })
  }
}
