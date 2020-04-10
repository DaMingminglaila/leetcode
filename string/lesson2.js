export default (str) => {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0] // j这里是找到了连续的0或者1，所以j肯定是连续的大于一位数的0或者1
    // j[0]表示j的第一个元素，因为j肯定是大于等于一个的，不用看j的所有的，只需要看j[0]的反面即可，
    // j[0]^1表示和j[0]取反,注意j[0]^1是数值类型，需要用toString()变成字符串
    // repeat()表示迅速生成几倍长度的相同的字符串，具体几倍就传给repeat，在下面就是o和j的长度是相同的，并且是取反的
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // 使用正则对象进行匹配,es6中的字符串模板的返回值是静态的，但是模板中是允许有变量的
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      // 返回正则对象匹配的第一个结果
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
  // match是找子串的行为，str.slice从i开始截取字符串，截取到最后
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}
