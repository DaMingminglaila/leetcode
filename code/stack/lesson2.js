export default(arr) => {
  // 把输入的数组换一种描述方法，把2维数组遍历，把所有1的起始点和截止点放在矩阵中
  // let result = []
  // 至少两个1以上
  let reg = /1{2,}/g

  // 把二维数组重新表达，把相邻的1提取出来（起始点+截止点）
  arr = arr.map(item => {
    // 把每一行变成字符串
    let str = item.join('')

    // exec会返回当前匹配到的索引以及内容，整个的模式
    let r = reg.exec(str)

    // 临时结果的保存
    let rs = []

    while (r) {
      //
      rs.push([r.index], r.index + r[0].length - 1)
      // 继续下一次匹配
      r = reg.exec(str)
    }
    return rs
  })

  // 通过递归计算相邻矩阵,n来代表第几行
  //   let maxRect = (arr, result, n = 1) => {
  //     // 开始弹出前两行
  //     let top = arr.pop()
  //     let next = arr.pop()

  //     // top和next的临时变量,记录第一、二行的每一个起始点和截止点的
  //     let tt
  //     let nn

  //     // 交叉点的起始索引
  //     let start

  //     // 交叉的截止索引
  //     let end
  //     n++
  //     //   for(let i=0,il)

//     // }
//     return 0
//   }
}
