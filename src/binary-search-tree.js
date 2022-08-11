const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor () {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }

  add(data) {
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }    
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return this.rootNode;
    } else {
      return addWithin(this.rootNode, data);
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
    return removeNode(this.rootNode, data)
  }

  min() {
    if (!this.rootNode){
      return null
    }
    let node = this.rootNode
    while (node.left){
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.rootNode){
      return null
    }
    let node = this.rootNode
    while (node.right){
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};