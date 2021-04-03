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
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // string representing all the values in the Linked List,
  toString() {
    let current = this.head;
    let list;

    while (current) {
      if (!list) {
        list = current.data;
        current = current.next;
      } else {
        list += ` -> ${current.data}`;
        current = current.next;
      }
    }

    list += ` -> ${current.data}`;
    return list;
  }
}

module.exports = {
  Node,
  LinkedList,
};
