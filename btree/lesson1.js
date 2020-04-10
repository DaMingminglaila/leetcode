// 声明二叉树中的每一个节点
class Node {
  constructor (val) {
    this.val = val
    this.left = undefined
    this.right = undefined
  }
}

// 声明二叉树
class Tree {
  constructor (data) {
    //  把所有的数据维护在一个数组中，方便寻找父子节点，要算对应的父节点
    let nodeList = []
    //  顶节点
    let root
    for (let i = 0, len = data.length; i < len; i++) {
      // 把数据变成了节点
      let node = new Node(data[i])
      // 把节点放入临时的数组中
      nodeList.push(node)
      // 在i大于0的情况下，表示进入了第2层（就是2的1次方的那层）
      //
      if (i > 0) {
        // 通过元素的下标索引值就可以算出元素是在那一层
        let n = Math.floor(Math.sqrt(i + 1))

        // 取当前层的起始值的索引
        let q = Math.pow(2, n) - 1

        // 算出上一层的起始点的索引值
        let p = Math.pow(2, n - 1) - 1

        // 找到当前节点的父节点
        let parent = nodeList[p + Math.floor(i - q) / 2]

        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    // 取出顶端元素后
    root = nodeList.shift()
    // 清空临时数组
    nodeList.length = 0
    return root
  }
  // 判断二叉树是否对称
  static isSymmetry (root) {
    // 判断是否有顶点，如果顶点为空，说明这是一个空的二叉树
    if (!root) {
      return true
    }
    // 通过递归
    let walk = (left, right) => {
    // 遍历的终点是什么:既没有左节点，又没有右节点
      if (!left && !right) {
        return true
      }
      if ((left && !right) || (!left && right) || (left.val !== right.val)) {
        return false
      }
      // 开始递归
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
    return walk(root.left, root.right)
  }
}

// 至此二叉树的节点就构造完毕
export default Tree
export {
  Node
}
