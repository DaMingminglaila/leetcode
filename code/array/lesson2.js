export default (arr) => {
  // 卡牌排序，让相同数字的牌挨在一起，方便分组
  // 数组本身具有的排序函数sort(),用join()方法后数组变成字符串，
  let str = arr.sort().join('')
  // 分组方式用正则表达式：(\d)\1+表示后面紧跟的都是相同的数值，后面|\d表示输入是单张牌的匹配
  let group = str.match(/(\d)\1+|\d/g)
  // 按照两组之间的公约数分组,并且拿出两组之间求出来的公约数再去和第三组求公约数，直到把所有组求完，
  // 如果求出来公约数大于1，也就是每组至少都两张牌，也就是满足x>=2的条件
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      // 把上次求出的公约数的值放入group中，让这个公约数和下一组进行最大公约数的计算
      // 这里表示一个字符重复v次，表示前两组的公约数是这个字符串的长度
      group.unshift('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1 : false
}
