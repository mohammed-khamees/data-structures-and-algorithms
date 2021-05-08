"use strict";

class HashTable {
  constructor(size) {
    this.values = {};
    this.size = size;
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};

    this.values[hash][key] = value;
  }

  hash(key) {
    var keyStr = key.toString();
    var sum = 0;

    for (let i = 0; i < keyStr.length; i++) sum += keyStr.charCodeAt(i);

    return sum % this.size;
  }

  get(key) {
    const hash = this.hash(key);

    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else return undefined;
  }

  contains(key) {
    const hash = this.hash(key);

    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return true;
    } else false;
  }
}

module.exports = HashTable;
