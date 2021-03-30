"use strict";

function binarySearch(numArr, key) {
  for (let index = 0; index < numArr.length; index++) {
    if (numArr[index] === key) {
      return index;
    }
  }
  return -1;
}

describe("Testing binary Search", () => {
  test("It should return the index of the key if the array contain it otherwise return -1", () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
  });
});
