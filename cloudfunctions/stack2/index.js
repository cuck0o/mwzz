// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
      title: "天鹅1号",
      index: "0",
      steps: [{
        text: '',
        desc: '',
      }]
    }, {
      title: "空军三号",
      index: "3",
      steps: [{
        text: '',
        desc: '',
      }]
    }, {
      title: "空军二号",
      index: "2",
      steps: [{
        text: '',
        desc: '',
      }]
    },
    {
      title: "空军一号",
      index: "1",
      steps: [{
        text: '',
        desc: '',
      }]
    }
  ]
}