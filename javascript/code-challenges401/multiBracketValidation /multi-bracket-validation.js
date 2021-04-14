"use strict";

const { Stack } = require("./../stacksAndQueues/stacks-and-queues");

function multiBracketValidation(input) {
  let stack1 = new Stack();

  if (typeof input === "string") {
    let inputArr = input.split("");

    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === "{" || inputArr[i] === "[" || inputArr[i] === "(") {
        stack1.push(inputArr[i]);
      } else {
        if (inputArr[i] === "}" || inputArr[i] === ")" || inputArr[i] === "]") {
          let theBracket = 0;
          if (inputArr[i] === "}") theBracket = "{";
          if (inputArr[i] === "]") theBracket = "[";
          if (inputArr[i] === ")") theBracket = "(";

          if (theBracket === stack1.peek()) stack1.pop();
          else return false;
        }
      }
    }

    if (stack1.top) {
      return false;
    } else {
      return true;
    }
  }

  return;
}

module.exports = multiBracketValidation;
