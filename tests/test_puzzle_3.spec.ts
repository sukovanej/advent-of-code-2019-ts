import solution3 from '../src/puzzle_3';
import { expect } from 'chai';
import 'mocha';

describe('Solution 1 (Day 2)', () => {
  class InputOutput {
    constructor(readonly input: Array<number>, readonly output: Array<number>) {}
  }

  const tests: Array<InputOutput> = [
    new InputOutput([1, 0, 0, 0, 99], [2, 0, 0, 0, 99]),
    new InputOutput([2, 3, 0, 3, 99], [2, 3, 0, 6, 99]),
    new InputOutput([2, 4, 4, 5, 99, 0], [2, 4, 4, 5, 99, 9801]),
    new InputOutput([1, 1, 1, 4, 99, 5, 6, 0, 99], [30, 1, 1, 4, 2, 5, 6, 0, 99]),
  ];

  for (const [index, test] of tests.entries()) {
    it(`pass for example case ${index}`, () => {
      expect(solution3(test.input)).to.have.members(test.output);
    });
  }
});
