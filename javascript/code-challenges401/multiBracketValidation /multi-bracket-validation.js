"use strict";

const { Stack } = require("./../stacksAndQueues/stacks-and-queues");

function multiBracketValidation(input) {
  let stack1 = new Stack();
  let stack2 = new Stack();
  let stack3 = new Stack();
  if (typeof input === "string") {
    let inputArr = input.split("");

    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === "{" || inputArr[i] === "}") {
        stack1.push(inputArr[i]);
      } else if (inputArr[i] === "[" || inputArr[i] === "]") {
        stack2.push(inputArr[i]);
      } else if (inputArr[i] === "(" || inputArr[i] === ")") {
        stack3.push(inputArr[i]);
      }
    }

    if (
      stack1.items.length % 2 !== 0 ||
      stack2.items.length % 2 !== 0 ||
      stack3.items.length % 2 !== 0
    ) {
      return false;
    }
    return true;
  }

  return;
}

module.exports = multiBracketValidation;
