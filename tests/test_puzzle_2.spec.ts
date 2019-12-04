import solution2 from '../src/puzzle_2';
import { expect } from 'chai';
import 'mocha';

describe('Solution 2 (Day 1)', () => {
  class InputOutput {
    constructor(readonly input: number, readonly output: number) {}
  }

  const tests: Array<InputOutput> = [
    new InputOutput(12, 2),
    new InputOutput(14, 2),
    new InputOutput(1969, 966),
    new InputOutput(100756, 50346),
  ];

  for (const [index, test] of tests.entries()) {
    it(`pass for example case ${index}`, () => {
      expect(solution2(test.input)).to.equals(test.output);
    });
  }
});
