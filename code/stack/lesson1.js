export default(arr) => {
  // 用数组实现堆栈结构,pop,push
  let result = []

  // 上一轮的数据
  let pre1

  // 上上轮的数据
  let pre2

  // 记住都要先判断输入有没有值

  arr.forEach(item => {
    // 数字，字母，+对应着不同的处理结果，所以要分开处理,不同条件对应不同结果，可以用switch
    switch (item) {
      case 'C':
        // 对数组进行遍历，遍历的目的是处理得分
        if (result.length) {
          // 弹出
          result.pop()
        }
        break

      case 'D':
        pre1 = result.pop()
        result.push(pre1, pre1 * 2)
        break

      case '+':
        pre1 = result.pop()
        pre2 = result.pop()
        result.push(pre2, pre1, pre2 + pre1)

        break
      default:
        result.push(item * 1)
    }
  })
  // total是遍历的临时保存结果，num是当前被遍历的选项，相加就是当前的总和
  return result.reduce((total, num) => { return total + num })
}
