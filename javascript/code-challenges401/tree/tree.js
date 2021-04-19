"use strict";

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
    tree = tree.root;

    const results = [];
    let flag = true;

    const traversal = (tree = tree) => {
      results.push(tree.value);

      console.log(results);

      if (flag) {
        flag = false;
        let tree1 = tree.left;
        traversal(tree1);
      } else {
        flag = true;
        let tree2 = tree.right;
        traversal(tree2);
      }
    };
    traversal(tree);

    return results;
  }
}

module.exports = {
  BinaryTree,
  Node,
};
