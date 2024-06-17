class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        ///handle left side of tree
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
          ///handle right side of tree
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data === node.data) {
        //no child nodees
        if (node.left === null && node.ride === null) {
          return null;
        }
        // 1 child node
        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }
        // two children
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

let bst = new BST();
bst.add(4);
bst.add(1);
bst.add(3);
bst.add(8);
bst.add(6);
bst.add(10);
bst.remove(1);
bst.remove(3);
console.log(bst.findMin());
