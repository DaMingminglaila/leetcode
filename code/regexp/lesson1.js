export default (str) => {
  // 声明一个正则
  var reg = /^(\w+)\1+$/
  return reg.test(str)
}
