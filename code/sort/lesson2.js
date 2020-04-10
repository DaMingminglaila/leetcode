// export default (arr, k) => {
//   // 降序排列
//   return arr.sort((a, b) => b - a)[k - 1]
// }

// 性能更高的办法
/* 比如说，冒泡排序中最大的元素在第一轮就已经找到了，第二大的元素在第二轮就找到了，所以没有必要在执行所有的元素排序 */
export default (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}
