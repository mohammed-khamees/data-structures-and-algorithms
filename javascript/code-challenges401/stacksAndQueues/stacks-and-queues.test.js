"use strict";

const { Node, Stack, Queue } = require("./stacks-and-queues");

describe("stack tests", () => {
  it("add to the stack ", () => {
    let stack = new Stack();
    let value = 4;
    stack.push(value);
    expect(stack.items.length).toBe(1);
    expect(stack.top).toBe(value);
  });

  it("add multiple to the stack ", () => {
    let stack = new Stack();
    let value = 4;
    let value2 = 5;
    stack.push(value);
    stack.push(value2);
    expect(stack.items.length).toBe(2);
    expect(stack.top).toBe(value2);
  });

  it("remove the top from the stack", () => {
    let stack = new Stack();
    let value = 4;
    stack.push(value);
    stack.pop();
    expect(stack.items.length).toBe(0);
    expect(stack.top).toBeUndefined();
  });

  it("should not remove the top from the stack", () => {
    let stack = new Stack();
    stack.pop();
    expect(stack.items.length).toBe(0);
    expect(stack.top).toBeNull();
  });

  it("search the stack ", () => {
    let stack = new Stack();
    let value = 4;
    stack.push(value);
    let item = stack.peek();
    expect(item).toBe(value);
  });

  it("search an empty stack", () => {
    let stack = new Stack();
    let item = stack.peek();
    expect(item).toBe("empty stack");
  });

  it("should return true for not empty stack", () => {
    let stack = new Stack();
    let value = 4;
    stack.push(value);
    let boolean = stack.isEmpty();
    expect(boolean).toBeFalsy();
  });

  it("should return false for empty stack", () => {
    let stack = new Stack();
    let boolean = stack.isEmpty();
    expect(boolean).toBeTruthy();
  });
});

describe("Queue tests", () => {
  it("add to the Queue ", () => {
    let queue = new Queue();
    let value = 4;
    queue.enqueue(value);
    expect(queue.items.length).toBe(1);
    expect(queue.front).toBe(value);
  });

  it("add multiple to the Queue ", () => {
    let queue = new Queue();
    let value = 4;
    let value2 = 5;
    queue.enqueue(value);
    queue.enqueue(value2);
    expect(queue.items.length).toBe(2);
    expect(queue.front).toBe(value);
  });

  it("remove the front from the Queue", () => {
    let queue = new Queue();
    let value = 4;
    queue.enqueue(value);
    queue.dequeue();
    expect(queue.items.length).toBe(0);
    expect(queue.front).toBeUndefined();
  });

  it("should not remove the front from the Queue", () => {
    let queue = new Queue();
    queue.dequeue();
    expect(queue.items.length).toBe(0);
    expect(queue.front).toBeNull();
  });

  it("search the Queue ", () => {
    let queue = new Queue();
    let value = 4;
    queue.enqueue(value);
    let item = queue.peek();
    expect(item).toBe(value);
  });

  it("search an empty Queue", () => {
    let queue = new Queue();
    let item = queue.peek();
    expect(item).toBe("empty queue");
  });

  it("should return false for empty Queue", () => {
    let queue = new Queue();
    let boolean = queue.isEmpty();
    expect(boolean).toBeTruthy();
  });

  it("should return true for not empty Queue", () => {
    let queue = new Queue();
    let value = 4;
    queue.enqueue(value);
    let boolean = queue.isEmpty();
    expect(boolean).toBeFalsy();
  });
});
