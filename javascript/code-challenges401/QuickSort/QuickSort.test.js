"use strict";

const quickSort = require("./QuickSort");

describe("Quick Sort", () => {
  it("Quick Sort", () => {
    let givenVal = quickSort([2, 1, 9, 76, 4]);
    let expectedVal = [1, 2, 4, 9, 76];
    expect(givenVal).toEqual(expectedVal);
  });
});
