// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
    title: "放量与有效放量",
    index: "0",
    info: "放量：简单比较前一日是上涨的；有效放量：量能突破三条均线"
  }, {
    title: "如何简单判断大盘是否容易跳水",
    index: "2",
    info: "开盘半小时后，筛选行业涨跌排行，看看大盘的涨势是否为权重股拉升，权重股拉升位次越靠前，跳水概率越小，反之为热点拉升易跳水"
  }, {
    title: "权重股的简易理解",
    index: "1",
    info: "券商，银行，房地产，工业机械，保险，石油化工，航空运输..."
  }]
}