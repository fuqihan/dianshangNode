'use strict'
const mongoose = require('./index.js')
// 连接mongodb
mongoose.connect('mongodb://115.159.79.40:27017/mydemo')
// 实例化连接对象
const db = mongoose.connection
var Schema =  mongoose.Schema

const usersBean = require('./usersSchema.js')
const shopsBean = require('./shopSchema.js')

db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
  console.log('MongoDB连接成功！！')
})
// 创建schema
const usersSchema = new Schema(usersBean)
const shopsSchema = new Schema(shopsBean)

// 创建model
const users = mongoose.model('users', usersSchema) // newClass为创建或选中的集合
const shops = mongoose.model('shops', shopsSchema) // newClass为创建或选中的集合
module.exports = {
  users,
  shops
}
