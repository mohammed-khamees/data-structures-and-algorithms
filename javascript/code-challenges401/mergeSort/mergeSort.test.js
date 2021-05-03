"use strict";

const mergeSort = require("./mergeSort");

describe("merge Sort", () => {
  it("merge Sort", () => {
    let givenVal = mergeSort([2, 1, 9, 76, 4]);
    console.log(givenVal);
    // console.log(givenVal());

    let expectedVal = [1, 2, 4, 9, 76];
    expect(givenVal).toEqual(expectedVal);
  });
});
