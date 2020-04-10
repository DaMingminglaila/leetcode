// export default (arr) => {
//   // 如果数组长度小于2返回0
//   if (arr.length < 2) {
//     return 0
//   }
//   // 排序
//   arr.sort()
//   // 用它来保存相邻元素的最大差值
//   let max = 0
//   for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
//     // 用一个变量来保存临时的差值，
//     tmp = arr[i + 1] - arr[i]
//     if (tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }

// 性能更优的解法，在排序的时候就可以算出差值，因此没必要再去遍历计算差值，
export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  //
  let max = 0
  // 遍历最外层循环的最大值
  let len = arr.length - 1

  // space记录两个相邻元素之间的差值
  let space

  // 冒泡排序的最外层循环
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    // 从第二轮开始做差值
    if (i < len) {
      // arr[i+1]=arr[length]
      space = arr[i + 1] - arr[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, arr[1] - arr[0])
}
