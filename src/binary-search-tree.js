const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  has(data) {
    return this._findNode(this._root, data) !== null;
  }

  find(data) {
    return this._findNode(this._root, data);
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  min() {
    return this._findMin(this._root);
  }

  max() {
    return this._findMax(this._root);
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._removeNode(node.right, minRight.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  _findMin(node) {
    if (node === null) {
      return null;
    }

    while (node.left !== null) {
      node = node.left;
    }

    return node.data;
  }

  _findMax(node) {
    if (node === null) {
      return null;
    }

    while (node.right !== null) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
