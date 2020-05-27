// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return [{
    title: "002022 - 科华生物",
    index: "0",
    steps: [{
      text: '简评：横盘已久，上涨趋势，可布局，预计50%空间',
      desc: '2020-05-27',
    }]
  }, {
    title: "002233 - 塔牌集团",
    index: "5",
    steps: [{
      text: '可布局，预计50%空间',
      desc: '2020-05-27',
    }]
  }, {
    title: "002745 - 木林森",
    index: "4",
    steps: [{
      text: '中线关注（价值洼地），预计下周观盘布局',
      desc: '2020-05-27',
    }]
  }, {
    title: "600037 - 歌华有线",
    index: "3",
    steps: [{
      text: '中线关注（价值洼地），预计下周观盘布局',
      desc: '2020-05-27',
    }]
  }, {
    title: "600206 - 有研新材",
    index: "2",
    steps: [{
      text: '建仓：12.43  止盈：12.9 / 14.1  止损：11.8',
      desc: '2020-04-30',
    }]
  }, {
    title: "300234 - 开尔新材",
    index: "1",
    steps: [{
      text: '建仓：6.5  止盈：7.3  止损：6.2',
      desc: '2020-04-30',
    }]
  }]
}