"use strict";

const { Node, BinaryTree, BinarySearchTree } = require("./tree");

describe("Node Module", () => {
  it("create an instance of Node", () => {
    const value = 4;
    const node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe("Binary Tree", () => {
  let tree;
  let searchTree;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    five.left = eight;
    three.left = six;
    three.right = seven;
    tree = new BinaryTree(one);
    searchTree = new BinarySearchTree(one);
  });

  it("preOrder", () => {
    const expected = [1, 2, 4, 5, 8, 3, 6, 7];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it("inOrder", () => {
    const expected = [4, 2, 8, 5, 1, 6, 3, 7];
    const inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });

  it("postOrder", () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    const postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

  it("add", () => {
    const expected = [4, 8, 5, 2, 6, 7, 3, 1];
    searchTree.add(5);
    expect(expected.length).toEqual(8);
  });

  it("contains", () => {
    const contains = searchTree.contains(5);

    expect(contains).toBeTruthy();
  });

  // it("findMaximumValue", () => {
  //   expect(tree.findMaximumValue()).toEqual(8);
  // });

  // it("breadthFirst", () => {
  //   const expected = [1, 2, 3, 4, 5, 6, 7, 8];
  //   expect(tree.breadthFirst(tree)).toEqual(expected);
  // });
});
