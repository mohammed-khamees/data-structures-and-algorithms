"use strict";

class Node {
  constructor(data, next = null) {
    this.head = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //insert with the value to the head
  insert(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  //value exists as a Node’s value somewhere within the list.
  includes(data) {
    let current = this.head;

    while (current) {
      if (current.head === data) return true;
      current = current.next;
    }
    return false;
  }

  //adds a new node with the given value to the end of the list
  append(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.length++;
  }

  //which add a new node with the given newValue immediately before the first value node
  insertBefore(data, newData) {
    if (!data) return;
    let node = new Node(newData);
    let current, previous;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.head !== data) {
        previous = current;
        current = current.next;
      }

      if (current === this.head) {
        previous = current;
        node.next = previous;
        this.head = node;
      } else {
        node.next = current;
        previous.next = node;
      }
    }

    this.size++;
  }

  //which add a new node with the given newValue immediately after the first value node
  insertAfter(data, newData) {
    if (!data) return;
    let node = new Node(newData);
    let current, previous;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.head !== data) {
        previous = current;
        current = current.next;
      }

      if (current === this.head) {
        previous = current;
        current = current.next;
        node.next = current;
        previous.next = node;
      } else {
        previous = current;
        current = current.next;
        node.next = current;
        previous.next = node;
      }
    }

    this.length++;
  }

  //return the node’s value that is k from the end of the linked list
  kthFromEnd(k) {
    if (k > this.size - 1) return "out of the linkedList range";
    let current = this.head;
    let count = this.length - 1;

    while (count !== k) {
      current = current.next;
      count--;
    }

    return current.head;
  }

  // string representing all the values in the Linked List,
  toString() {
    let current = this.head;
    let list;

    while (current) {
      if (!list) {
        list = current.head;
        current = current.next;
      } else {
        list += ` -> ${current.head}`;
        current = current.next;
      }
    }

    list += ` -> ${current}`;
    return list;
  }
}

module.exports = {
  Node,
  LinkedList,
};
