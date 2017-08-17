var express = require('express');
var router = express.Router();
var usersModel = require('../models/userModel.js');
var auth = require('../models/auth.js');
var fs = require("fs");
// 上传模块
var multer = require('multer');
// 实例化上传模块(前端使用参数名为file)
var upload = multer({ dest: 'uploads/'}).single('file');

//  注册用户信息
router.post('/addUser', function (req, res, next) {
  console.log('addUser=========')

    let data = usersModel.addUser(req.body.obj);
    res.json({
      info: true,
      token: auth.createToken(data.id),
      name: req.body.obj.name
    })

});
//  登陆信息
router.post('/postLogin', function (req, res, next) {
  console.log(req.body)
  usersModel.postLogin(req.body).then((data) => {
    //  console.log(data.id)
      if(data) {
        res.json({
          info: true,
          token: auth.createToken(data.id),
          name: data.name
        })
      } else {
        res.json({
          info: false
        })
      }
  })
});

router.post('/checkToken', function(req, res, next) {
     console.log(req.body.token)
     res.json(auth.checkToken(req.body.token))
})


// 判断用户名是否重复
router.post('/nameRepeat', function (req, res, next) {

  usersModel.nameRepeat(req.body.name).then((data) => {
    console.log(data)
    if(!data){
        res.json(false)
    } else {
        res.json(true)
    }
  })

})
// 单文件上传
router.post("/upload",upload,function(req,res,next){
    //  请求路径
    var url = global.baseURL+req.url;

      var obj = req.file;
      console.log('obj====',obj);
      var ldot = obj.originalname.lastIndexOf(".");
      var type = obj.originalname.substring(ldot + 1);
      var tmp_path = obj.path;
      var new_path = "public/images/"+obj.filename+'.'+type;
      console.log("原路径：" + tmp_path);
      fs.rename(tmp_path, new_path, function() {
        fs.unlink(tmp_path, function() {
          console.log(123)
        })
      })
      /*修改上传文件地址*/
      upload(req,res,function(err){
        if (err) {
            console.log('上传失败');
        }else{
            console.log('上传成功');
        }
    });

    // 反馈上传信息
     res.json(new_path);
});
module.exports = router;
