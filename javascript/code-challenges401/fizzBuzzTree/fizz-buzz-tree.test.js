// "use strict";

// const { Node, BinaryTree } = require("./../tree/tree");
// const fizzBuzzTree = require("./fizz-buzz-tree");

// describe("Node Module", () => {
//   it("create an instance of Node", () => {
//     const value = 4;
//     const node = new Node(value);
//     expect(node.value).toEqual(value);
//     expect(node.left).toBeNull();
//     expect(node.right).toBeNull();
//   });
// });

// describe("Binary Tree", () => {
//   let tree;
//   beforeAll(() => {
//     const one = new Node(1);
//     const two = new Node(2);
//     const three = new Node(3);
//     const four = new Node(4);
//     const five = new Node(5);
//     const six = new Node(6);
//     const seven = new Node(7);
//     const eight = new Node(8);
//     one.left = two;
//     one.right = three;
//     two.left = four;
//     two.right = five;
//     five.left = eight;
//     three.left = six;
//     three.right = seven;
//     tree = new BinaryTree(one);
//   });

//   it("fizzBuzzTree", () => {
//     let newTree = fizzBuzzTree(tree).inOrder();
//     const expected = ["4", "2", "8", "Buzz", "1", "Fizz", "Fizz", "7"];
//     expect(newTree).toEqual(expected);
//   });
// });
