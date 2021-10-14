const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let node = new Node(data);
    if (!this._root) {
      this._root = node;
      return;
    }
    this.addNode(node, this._root);
  }

  has(data) {
    if (this.find(data) === null) return false;
    return true;
  }

  find(data) {
    return this.findNode(data, this._root);
  }

  remove(data) {
    if (this.find(data) === null) return;
    this._root = this.removeNode(data, this._root);
  }

  min() {
    return this.getMinData(this._root);
  }

  max() {
    return this.getMaxData(this._root);
  }

  addNode(nodeInsert, nodeCheck) {
    if (nodeInsert.data > nodeCheck.data) {
      if (nodeCheck.right != null)
        return this.addNode(nodeInsert, nodeCheck.right);
      else {
        nodeCheck.right = nodeInsert;
        return;
      }
    }

    if (nodeInsert.data < nodeCheck.data) {
      if (nodeCheck.left != null)
        return this.addNode(nodeInsert, nodeCheck.left);
      else nodeCheck.left = nodeInsert;
    }
  }

  findNode(dataFind, nodeCheck) {
    if (nodeCheck === null) return null;
    if (nodeCheck.data === dataFind) return nodeCheck;

    if (dataFind > nodeCheck.data)
      return this.findNode(dataFind, nodeCheck.right);
    if (dataFind < nodeCheck.data)
      return this.findNode(dataFind, nodeCheck.left);
  }

  getMaxData(checkNode) {
    if (checkNode.data === null) return null;
    if (checkNode.right === null) return checkNode.data;
    return this.getMaxData(checkNode.right);
  }

  getMinData(checkNode) {
    if (!checkNode.data) return null;
    if (!checkNode.left) return checkNode.data;
    return this.getMinData(checkNode.left);
  }

  removeNode(dataRemove, nodeCheck) {
    if (nodeCheck === null) return nodeCheck;

    if (dataRemove === nodeCheck.data) {
      if (!nodeCheck.left) return nodeCheck.right;
      if (!nodeCheck.right) return nodeCheck.left;
      nodeCheck.data = this.min(nodeCheck.right);
      nodeCheck.right = this.removeNode(nodeCheck.data, nodeCheck.right);
    }
    if (dataRemove > nodeCheck.data)
      nodeCheck.right = this.removeNode(dataRemove, nodeCheck.right);
    if (dataRemove < nodeCheck.data)
      nodeCheck.left = this.removeNode(dataRemove, nodeCheck.left);
    return nodeCheck;
  }
};

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
