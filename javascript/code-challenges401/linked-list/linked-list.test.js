"use strict";

const { Node, LinkedList } = require("./linked-list");

describe("testing the linked list", () => {
  test("init node class", () => {
    let node = new Node(10);
    expect(node.head).toEqual(10);
    expect(node.next).toEqual(null);
  });

  test("add new node to the head of the linked list", () => {
    let ll = new LinkedList();
    ll.insert(5);
    expect(ll.data).toEqual(5);
    expect(ll.head.next).toBeNull();
  });

  //   test("should add new node to linked list with one value", () => {
  //     //arrange
  //     let ll = new LinkedList(); // empty
  //     ll.add(10); // head = 10
  //     let value = 5;
  //     //act
  //     ll.add(value); // head:10 , next = {node value 5, next = null}
  //     //assert
  //     expect(ll.head.next.value).toEqual(value);
  //     expect(ll.head.next.next).toBeNull();
  //   });

  //   test("should add new node to linked list with more than one value", () => {
  //     //arrange
  //     let ll = new LinkedList(); // empty
  //     ll.add(10); // head = 10
  //     ll.add(26); // head = 10
  //     let value = 5;
  //     //act
  //     ll.add(value); // head:10 , next = {node value 5, next = null}
  //     //assert
  //     let count = 0;
  //     let lastNode = ll.head;
  //     while (count < 2) {
  //       count++;
  //       lastNode = lastNode.next;
  //     }

  //     expect(lastNode.value).toEqual(value);
  //     expect(lastNode.next).toBeNull();
  //   });

  //   test("should add new header to linked list", () => {
  //     //arrange
  //     let ll = new LinkedList(); // empty
  //     ll.add(10); // header
  //     ll.add(26); // next node
  //     let value = 5;
  //     //act
  //     ll.addNewHeader(value);
  //     //assert
  //     expect(ll.head.value).toEqual(value);
  //     expect(ll.head.next.value).toEqual(10);
  //   });
});
