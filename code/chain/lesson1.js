// 声明链表的节点
class Node {
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表的数据结构
class NodeList {
  constructor (arr) {
    // 题目中给的是一个数组，要把它变成链表的数据结构
    // 声明链表的头节点，头指针肯定是一个node节点
    let head = new Node(arr.shift())

    // 结点之间相互引用的关系
    // 因为是从第一个节点开始，所以head是next
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    // es6如果构造器返回的是一个对象，那么这个类的对象实例就是new Node(arr.shift())
    return head
  }
}

// 排序

// 排序要用到交换的功能，所以先定义函数
// 交换两个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 还有一个递归的过程，递归中需求不停寻找链表中的元素
// 这里是如果寻找的函数,这个函数的功能就是给一个起始和终止节点，返回第一次循环后的基准元素，拿到以后再去找下一次的基准位置
let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 在循环过一次后,让基准元素到中间去
  swap(p, begin)
  return p
}

// 排序
export default function sort (begin, end) {
  if (begin !== end) {
    let part = partion(begin, end)
    // 开始递归左侧
    sort(begin, part)
    // 开始递归右侧
    sort(part.next, end)
  }
}

export {
  Node,
  NodeList
}
