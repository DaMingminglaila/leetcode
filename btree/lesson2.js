// 声明一个二叉搜索树节点
class Node {
  constructor (val) {
    this.val = val
    this.left = undefined
    this.right = undefined
  }
}

// 声明二叉搜索树的结构
class Tree {
  constructor (data) {
    let root = new Node(data.shift())
    // 遍历所有的数据，逐渐插入到当前这棵搜索树中去
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }
  insert (node, data) {
    // 判断当前节点node和要插入的数据data之间的关系，大于右，小于左
    if (node.val > data) {
      if (node.left === undefined) {
        node.left = new Node(data)
      } else {
        this.insert(node.left, data)
      }
    } else {
      if (node.right === undefined) {
        node.right = new Node(data)
      } else {
        this.insert(node.right, data)
      }
    }
  }
  // 判断给定的二叉树是不是二叉搜索树
  static walk (root) {
    // 递归的边界
    if (!root.left && !root.right) {
      return true
    } else if ((root.left && root.val < root.left.val) || (root.right && root.val > root.right.val)) {
      return false
    } else {
      return Tree.walk(root.left) && Tree.walk(root.right)
    }
  }
}

export default Tree
export {
  Node
}
