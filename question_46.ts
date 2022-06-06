var d = new Date()

yesterday(d)
today(d)
tomorrow(d)

function today(date: any) {
  var year = date.getFullYear() // 年
  // getMonthの値は、0から11なのでプラス1をしています。
  var month = date.getMonth() + 1 // 月
  var day = date.getDate() // 日

  console.log(year + '-' + month + '-' + day)
}

function yesterday(date: any) {
  var year = date.getFullYear() // 年
  // getMonthの値は、0から11なのでプラス1をしています。
  var month = date.getMonth() + 1 // 月
  var day = date.getDate() - 1 // 日

  console.log(year + '-' + month + '-' + day)
}

function tomorrow(date: any) {
  var year = date.getFullYear() // 年
  // getMonthの値は、0から11なのでプラス1をしています。
  var month = date.getMonth() + 1 // 月
  var day = date.getDate() + 1 // 日

  console.log(year + '-' + month + '-' + day)
}
