var express = require('express');
var router = express.Router();
var shopModel = require('../models/shopModel.js');

/* GET users listing. */
router.get('/findShops', function (req, res, next) {
    shopModel.findShops().then((data) => {
      res.json(data)
    })
  });
  router.get('/addShop', function (req, res, next) {
    shopModel.addShops();
    res.json(123)
    });
module.exports = router;
