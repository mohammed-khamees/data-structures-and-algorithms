"use strict";

function binarySearch(numArr, key) {
  if (numArr.length < 0) return -1;

  let firstIndex = 0;
  let lastIndex = numArr.length - 1;

  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  while (numArr[middleIndex] !== key && firstIndex < lastIndex) {
    if (numArr[middleIndex] > key) {
      lastIndex = middleIndex - 1;
    } else if (numArr[middleIndex] < key) {
      firstIndex = middleIndex + 1;
    }

    middleIndex = Math.floor((firstIndex + lastIndex) / 2);
  }

  if (numArr[middleIndex] === key) return middleIndex;
  else return -1;
}

module.exports = binarySearch;
