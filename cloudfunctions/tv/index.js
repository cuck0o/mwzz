// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return [{
    date: "2020-05-25 14:00",
    title: "【空军三号】及【飞天1号】重大布局",
    info: ""
  }, {
    date: "2020-05-20 20:30",
    title: "两会必涨题材个股",
    info: ""
  }]
}