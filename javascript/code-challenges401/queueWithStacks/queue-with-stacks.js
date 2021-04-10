"use strict";

class PseudoQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.front = null;
  }

  enqueue(value) {
    this.stack1.push(value);
    this.front = this.stack1[0];
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    let front = this.stack2.pop();
    this.front = this.stack2[this.stack2.length - 1];
    return front;
  }
}

module.exports = PseudoQueue;
