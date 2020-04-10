export default (tasks, n) => {
  // 声明一个变量，保持任务最终执行的顺序
  let q = ''
  // 这个Q使用来做任务分类的
  let Q = {}
  tasks.forEach(item => {
    // 如果Q[item]为真，要不断判断剩余任务的个数，所以用这种办法把任务做一归类，用任务本身做key,它出现的次数做value
    if (Q[item]) {
      Q[item]++
    } else {
      Q[item] = 1
    }
  })
  // 未完待续
  while (1) {
    // 首先现在要知道一共有多少种任务
  }
}
