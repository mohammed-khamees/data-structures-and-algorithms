"use strict";

const multiBracketValidation = require("./multi-bracket-validation");

describe("stack tests", () => {
  it("should return true", () => {
    expect(multiBracketValidation("{}")).toBeTruthy();
    expect(multiBracketValidation("{}(){}")).toBeTruthy();
    expect(multiBracketValidation("()[[Extra Characters]]")).toBeTruthy();
    expect(multiBracketValidation("(){}[[]]")).toBeTruthy();
    expect(multiBracketValidation("{}{Code}[Fellows](())")).toBeTruthy();
  });

  it("should return false", () => {
    expect(multiBracketValidation("[({}]")).toBeFalsy();
    expect(multiBracketValidation("(](")).toBeFalsy();
  });

  it("should return undefined if the typeof input is not a string", () => {
    expect(multiBracketValidation(5)).toBeUndefined();
    expect(multiBracketValidation({})).toBeUndefined();
  });
});
