"use strict";

const insertionSort = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    const element = arr[index];
    for (
      var index2 = index - 1;
      index2 >= 0 && arr[index2] > element;
      index2--
    ) {
      arr[index2 + 1] = arr[index2];
    }
    arr[index2 + 1] = element;
  }

  return arr;
};

module.exports = insertionSort;
