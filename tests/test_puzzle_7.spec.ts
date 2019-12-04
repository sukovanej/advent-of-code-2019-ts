import { checkCriteria, solution7 } from '../src/puzzle_7';
import { expect } from 'chai';
import 'mocha';
import * as fs from 'fs';

describe('Solution 1 (Day 4)', () => {
  class InputOutput {
    constructor(readonly input: number, readonly output: boolean) {}
  }

  const tests: Array<InputOutput> = [
    new InputOutput(111111, true),
    new InputOutput(223450, false),
    new InputOutput(123789, false),
  ];

  for (const [index, test] of tests.entries()) {
    it(`pass for example case ${index}`, () => {
      expect(checkCriteria(test.input)).to.equals(test.output);
    });
  }

  const values = fs
    .readFileSync('tests/inputs/input7.txt')
    .toString()
    .split('-')
    .map(Number);

  it('returns a corrent result', () => {
    expect(solution7(values[0], values[1])).to.equal(1625);
  });
});
