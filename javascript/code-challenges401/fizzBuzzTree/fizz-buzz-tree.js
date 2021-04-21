"use strict";

const fizzBuzzTree = (tree) => {
  const traversal = (node) => {
    if (node) {
      if (node) {
        if (node.value % 3 === 0 && node.value % 5 === 0) {
          node.value = "FizzBuzz";
        } else if (node.value % 3 === 0) {
          node.value = "Fizz";
        } else if (node.value % 5 === 0) {
          node.value = "Buzz";
        } else {
          node.value = `${node.value}`;
        }
        traversal(node.left);
      }
      if (node.left) {
        if (node.left.value % 3 === 0 && node.left.value % 5 === 0) {
          node.left.value = "FizzBuzz";
        } else if (node.left.value % 3 === 0) {
          node.left.value = "Fizz";
        } else if (node.left.value % 5 === 0) {
          node.left.value = "Buzz";
        } else {
          node.left.value = `${node.left.value}`;
        }
        traversal(node.left);
      }
      if (node.right) {
        if (node.right.value % 3 === 0 && node.right.value % 5 === 0) {
          node.right.value = "FizzBuzz";
        } else if (node.right.value % 3 === 0) {
          node.right.value = "Fizz";
        } else if (node.right.value % 5 === 0) {
          node.right.value = "Buzz";
        } else {
          node.right.value = `${node.right.value}`;
        }
        traversal(node.right);
      }
    }
  };

  traversal(tree.root);

  return tree;
};

module.exports = fizzBuzzTree;
