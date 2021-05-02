"use strict";

const insertionSort = require("./insertionSort");

describe("insertion Sort", () => {
  it("insertion Sort", () => {
    let givenVal = insertionSort([2, 1, 9, 76, 4]);
    let expectedVal = [1, 2, 4, 9, 76];
    expect(givenVal).toEqual(expectedVal);
  });
});
