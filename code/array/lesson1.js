/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (str) {
  if (str == null || str === undefined || str === '') { return [] }
  // 1.创建电话号码映射,数字和数组的下表标对应，数组内容和要映射的内容对应
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 2.把字符串按照单个字符分割开变成一个数组，234=>{2,3,4}
  let num = str.split('')
  // 3.保存键盘映射后的字母内容，如23=>['abc','def']
  let code = []
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  // 组合运算
  let comb = (arr) => {
  // 临时变量用来保存前两个组合的结果
    if (arr.length === 1) {
      let arr1 = arr[0].split('')
      return arr1
    }

    let tmp = []
    // 最外层的循环时遍历第一个元素，里层循环遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    // 用临时变量里的内容，也就是前两个元素组合完成之后的内容{ae,ad……}去替换原来的{abc,def}
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  // 此处进行代码调用
  return comb(code)
}
letterCombinations('23')
