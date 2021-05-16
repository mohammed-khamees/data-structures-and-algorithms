"use strict";

const HashTable = require("../hashtable/hashtable");

function repeatedWord(string) {
  let words = string.split(" ");
  let wordsFiltered = [];
  let word = [];

  for (let i = 0; i < words.length; i++) {
    let chars = words[i].split("");
    for (let j = 0; j < chars.length; j++) {
      if (/[a-zA-Z]/.test(chars[j])) {
        word.push(chars[j]);
      }
    }
    wordsFiltered.push(word.join("").toLowerCase());
    word = [];
  }

  let ht = new HashTable(wordsFiltered.length);

  for (let i = 0; i < wordsFiltered.length; i++) {
    let key = wordsFiltered[i];
    let value = wordsFiltered[i];
    if (ht.contains(key)) {
      if (ht.get(key) === key) return ht.get(key);
    }
    ht.add(key, value);
  }

  return "there is no repeated word";
}

module.exports = repeatedWord;
