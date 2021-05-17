"use strict";

const { BinaryTree, Node } = require("./../tree/tree");
const treeIntersection = require("./treeIntersection");

describe("treeIntersection", () => {
  let tr1, tr2;
  beforeAll(() => {
    const one1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);
    const six1 = new Node(6);
    const seven1 = new Node(7);
    const eight1 = new Node(8);

    one1.left = two1;
    one1.right = three1;
    two1.left = four1;
    two1.right = five1;
    three1.left = six1;
    three1.right = seven1;
    five1.left = eight1;

    tr1 = new BinaryTree(one1);
  });

  beforeAll(() => {
    const one2 = new Node(11);
    const two2 = new Node(2);
    const three2 = new Node(33);
    const four2 = new Node(44);
    const five2 = new Node(5);
    const six2 = new Node(6);
    const seven2 = new Node(7);
    const eight2 = new Node(8);

    one2.left = two2;
    one2.right = three2;
    two2.left = four2;
    two2.right = five2;
    three2.left = six2;
    three2.right = seven2;
    five2.left = eight2;

    tr2 = new BinaryTree(one2);
  });

  it("values trees", () => {
    expect(treeIntersection(tr1, tr2)).toEqual([2, 5, 8, 6, 7]);
  });
});
