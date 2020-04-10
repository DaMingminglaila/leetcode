export default(arr, n) => {
// 计数器,表示可以种下的花
  let max = 0
  // 右边界补充[0,0,0],最后一块地能不能种只取决于前面的是不是1，所以默认最后一块地的右侧是0（无须考虑右侧边界有阻碍）（LeetCode测试用例）
  arr.push(0)
  // length-1的原因，如果length这里不减去1，length的前一位就没法+1了，这是关于数组的右边界问题
  for (let i = 0, len = arr.length - 1; i < len; i++) {
  // 判断当前元素是否为0
    if (arr[i] === 0) {
    // 判断是否是第一个元素，如果是的话要判断这第一个元素是否为0
      if (i === 0 && arr[1] === 0) {
      // 如果是，则计数器加1
        max++
        i++
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
      }
    }
  }
  return max >= n
}
