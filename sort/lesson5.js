// export default (arr) => {
//   let quickSort = (arr) => {
//     // 设定终止条件
//     let len = arr.length
//     if (len < 2) {
//       return arr
//     } else {
//       // 通常情况下，最简单的方式就是选择数组的第一个作为标杆元素
//       let flag = arr[0]
//       // 用两个变量表示左边和右边
//       let left = []
//       let right = []
//       // tmp表示当前元素（tmp做过交换时的临时变量，做过当前元素）
//       for (let i = 1, tmp; i < len; i++) {
//         tmp = arr[i]
//         if (tmp < flag) {
//           left.push(tmp)
//         } else {
//           right.push(tmp)
//         }
//       }
//       // 进行递归操作（注意每次递归带来了内存的占用）
//       return quickSort(left).concat(flag, quickSort(right))
//     }
//   }
//   return quickSort(arr)
// }

// 快速排序优化算法(划分交换排序)
// 注意每次递归带来了内存的占用
// ！in-place算法:利用交换不再造成递归的时候内存的增加
// 以标尺元素的下一个位置作为交换的起始位置
export default(arr) => {
  // 要在数组中用到的交换函数，在这里先定义好
  // 可以用位运算符实现两个元素的交换
  let swap = (arr, i, j) => {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  // 找标尺元素在遍历之后的位置,在数组中的脚标
  let findCenter = (arr, left, right) => {
  //  变的是从哪里开始遍历的具体位置,left和right表示的是下一轮便利的左下标和右下标
  // 左边的标尺
    let flag = arr[left]
    // idx是要交换的位置,就是比游标小的元素和谁交换的位置
    let idx = left + 1
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        // 交换之后，交换的下角标也要+1
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }
  // 递归排序
  let sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      sort(arr, left, center - 1)
      sort(arr, center, right)
    }
  }
  sort(arr, 0, arr.length - 1)
  return arr
}
