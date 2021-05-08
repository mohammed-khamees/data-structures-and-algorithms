"use strict";

const HashTable = require("./hashtable");
let hashTable = new HashTable(20);

describe("Hash Table", () => {
  it("hash a key properly", () => {
    let key = "hello world";
    expect(hashTable.hash(key)).toBeLessThanOrEqual(20);
  });

  it("add to the hashed table", () => {
    let key = "hello world";
    hashTable.add(key, 30);
    expect(hashTable.values[hashTable.hash(key)]).toBeDefined();
  });

  it("find if the value exists in the table by it is key", () => {
    let key = "hello from the other side";
    hashTable.add(key, 10);
    expect(hashTable.contains(key)).toBeTruthy();
    expect(hashTable.contains("world")).toBeFalsy();
  });

  it("get the value of a key if it exists in the table", () => {
    let key = "hello from the other side";
    let value = 10;
    hashTable.get(key);
    expect(hashTable.get(key)).toEqual(value);
  });
});
