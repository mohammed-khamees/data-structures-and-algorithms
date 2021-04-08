"use strict";

class Node {
  constructor(head, next = null) {
    this.head = head;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  push(element) {
    this.items.unshift(element);
    this.top = element;
  }

  pop() {
    if (!this.items.length) return "empty stack";
    let item = this.items.shift();
    this.top = this.items[0];
    return item;
  }

  peek() {
    if (!this.top) return "empty stack";
    return this.top;
  }

  isEmpty() {
    return !this.items.length ? true : false;
  }
}

class Queue {
  constructor() {
    this.items = [];
    this.front = null;
  }

  enqueue(element) {
    this.items.push(element);
    this.front = this.items[0];
  }

  dequeue() {
    if (!this.items.length) return "empty queue";
    let item = this.items.shift();
    this.front = this.items[0];
    return item;
  }

  peek() {
    return !this.front ? "empty queue" : this.front;
  }

  isEmpty() {
    return !this.items.length ? true : false;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};
