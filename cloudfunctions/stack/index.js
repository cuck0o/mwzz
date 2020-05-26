// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
    title: "600206 - 有研新材",
    index: "0",
    steps: [{
      text: '建仓：12.43  止盈：12.9 / 14.1  止损：11.8',
      desc: '2020-04-30',
    }]
  },{
    title: "300234 - 开尔新材",
    index: "1",
    steps: [{
      text: '建仓：6.5  止盈：7.3  止损：6.2',
      desc: '2020-04-30',
    }]
  }]
}