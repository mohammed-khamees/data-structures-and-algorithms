// "use strict";

// const { Queue } = require("./../stacksAndQueues/stacks-and-queues");

// class Node {
//   constructor(value, num) {
//     this.value = value;
//     this.children = [num];
//   }
// }

// class KaryTree {
//   constructor(num) {
//     this.root = null;
//     this.num = num;
//   }
// }

// function fizzBuzzTree(tree) {
//   let newTree = new KaryTree(tree.num);

//   newTree.root = tree.root;

//   let queue = new Queue();

//   if (newTree.root) queue.enqueue(newTree.root);
//   else return;

//   const traversal = (node) => {
//     if (node.value % 5 === 0 && node.value % 3 === 0) node.value = "FizzBuzz";
//     else if (node.value % 3 === 0) node.value = "Fizz";
//     else if (node.value % 5 === 0) node.value = "Buzz";
//     else node.value = node.value.toString();

//     for (let i = 0; i < node.children.length; i++) {
//       if (node.children[i]) {
//         queue.enqueue(node.children[i]);
//       }
//     }

//     if (!queue.isEmpty()) traversal(queue.dequeue());
//   };

//   traversal(queue.dequeue());

//   return newTree;
// }

// module.exports = fizzBuzzTree;
