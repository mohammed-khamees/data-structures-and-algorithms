"use strict";

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return ((leftArr = left, rightArr = right) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < leftArr.length && j < rightArr.length) {
      if (rightArr[j] > leftArr[i]) {
        results.push(leftArr[i]);
        i++;
      } else {
        results.push(rightArr[j]);
        j++;
      }
    }
    while (i < leftArr.length) {
      results.push(leftArr[i]);
      i++;
    }
    while (j < rightArr.length) {
      results.push(rightArr[j]);
      j++;
    }
    return results;
  })();
};

module.exports = mergeSort;
