export default (arr) => {
  // 选择排序
  for (let i = 0, len = arr.length, min; i < len; i++) {
  //  min变量记录当前的最小值
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
  }
  return ''
}
