"use strict";

function insertShiftArray(numArr, num) {
  if (numArr.length && typeof num === "number") {
    let max;
    let arr = [];
    for (let index = 0; index <= numArr.length; index++) {
      if (numArr[index] < num && typeof numArr[index] === "number") {
        arr[index] = numArr[index];
      } else {
        if (max) {
          arr[index] = max;
        } else {
          arr[index] = num;
        }
        max = numArr[index];
      }
    }

    return arr;
  } else {
    return "tha array is empty";
  }
}

describe("Testing insert Shift Array", () => {
  test("It should return an array containing the number that added in the correct order", () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([
      4,
      8,
      15,
      16,
      23,
      42,
    ]);
  });
});
