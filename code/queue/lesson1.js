// 创建长度为k的队列
export default class MyCircularQueue {
  constructor (k) {
    // 用来保存数据长度为k的数据结构
    this.list = Array(k)

    // 队首指针
    this.front = 0
    // 队尾的指针
    this.rear = 0
    // 队列的长度
    this.max = k
  }
  enQueue (num) {
    // 想要添加数据，必须监测队列是不是满了，成功插入返回真，不成功就返回false
    if (this.isFull()) {
      return false
    } else {
      // 就让队列尾指针所指的地方放入这个num
      this.list[this.rear] = num
      // 注意插完以后要移动尾指针，不然下一次写的时候就会覆盖,这里注意队尾指针的移动，移动到数组最后一位之后要重新到第一位
      // 尾指针移动的方法，当this.rear=4的时候，4+1=5，5%5=0，这样队尾指针回到队首，妙！
      this.rear = (this.rear + 1) % this.max
      return true
    }
  }
  deQueue () {
    if (this.isEmpty()) {
      return false
    }
    //  移除元素非常简单，按照队列的规则，移除元素就是从队首删除元素
    // let v = this.list[this.front]
    this.list[this.front] = ''
    // 队首指针的移动也是一样的
    this.front = (this.front + 1) % this.max
    return true
  }
  isEmpty () {
    // 队尾和队首指针指向同一个地方，并且指向的元素为空
    return this.front === this.rear && !this.list[this.front]
  }
  isFull () {
    // 队尾和队首指针指向同一个地方，并且指向的元素不为空
    return this.front === this.rear && !!this.list[this.front]
  }
  Front () {
    if (this.isEmpty()) {
      return -1
    }
    // 获取队首元素
    return this.list[this.front]
  }
  Rear () {
    if (this.isEmpty()) {
      return -1
    }
    // 获取队尾元素,注意尾指针尾巴元素
    let rear = this.rear - 1
    return this.list[rear < 0 ? this.max - 1 : rear]
  }
}
