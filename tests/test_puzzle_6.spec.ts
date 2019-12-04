import solution6 from "../src/puzzle_6";
import { expect } from "chai";
import "mocha";

describe("Solution 2 (Day 3)", () => {
  class InputOutput {
    constructor(
      readonly line1: string,
      readonly line2: string,
      readonly output: number
    ) {}
  }

  const tests: Array<InputOutput> = [
    new InputOutput(
      "R75,D30,R83,U83,L12,D49,R71,U7,L72",
      "U62,R66,U55,R34,D71,R55,D58,R83",
      610
    ),
    new InputOutput(
      "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
      "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7",
      410
    )
  ];

  for (const [index, test] of tests.entries()) {
    it(`pass for example case ${index}`, () => {
      expect(solution6(test.line1, test.line2)).to.equals(test.output);
    });
  }
});
