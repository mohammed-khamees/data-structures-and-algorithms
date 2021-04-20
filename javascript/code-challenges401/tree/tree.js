"use strict";

const { Queue } = require("./../stacksAndQueues/stacks-and-queues");

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    const results = [];
    const traversal = (node) => {
      results.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return results;
  }

  inOrder() {
    const results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      results.push(node.value);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return results;
  }

  postOrder() {
    const results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      results.push(node.value);
    };
    traversal(this.root);
    return results;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  findMaximumValue() {
    const results = [];
    const traversal = (node) => {
      if (node.left) traversal(node.left);
      results.push(node.value);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return Math.max(...results);
  }

  breadthFirst(tree) {
    let newTree = tree.root;
    let queueTree = new Queue();

    let arr = [];

    if (newTree) {
      queueTree.enqueue(newTree);

      while (queueTree.front) {
        newTree = queueTree.dequeue();
        arr.push(newTree.value);

        if (newTree.left) queueTree.enqueue(newTree.left);

        if (newTree.right) queueTree.enqueue(newTree.right);
      }
    } else {
      return;
    }

    arr.pop();

    return arr;
  }
}

module.exports = {
  BinaryTree,
  Node,
  BinarySearchTree,
};
