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

export default function isCircle (head) {
  // 建立快指针和慢指针
  let slow = head
  // 为了对fast做一个重复的利用，所以慢指针和快指针不在同一个起点
  let fast = head.next
  // 要不断循环遍历
  while (1) {
    // 检测只有一个节点的时候，这个时候就没有快指针,
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.nexts

      fast = fast.next.next
    }
  }
}

export {
  Node,
  NodeList
}
