import solution4 from "../src/puzzle_4";
import { expect } from "chai";
import "mocha";
import * as fs from "fs";

describe("Solution 2 (Day 2)", () => {
  it(`pass for example case`, () => {
    const inputData: Array<number> = fs
      .readFileSync("tests/inputs/input3.txt", "utf-8")
      .split(",")
      .map(Number);
    expect(solution4(inputData, 19690720)).to.equal(7749);
  });
});
