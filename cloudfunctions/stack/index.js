// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
    title: "复星医药",
    index: "0",
    steps: [{
      text: '1',
      desc: '2',
    },{
      text: '1',
      desc: '2',
    }]
  }]
}