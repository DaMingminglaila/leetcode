export default(arr) => {
  // 冒泡排序,每次遍历的边界都减小一个
  for (let i = arr.length - 1, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j + 1] = tmp
        arr[j] = arr[j + 1]
      }
    }
  }
  return arr
}
