import { solution8, checkCriteriaExtended } from '../src/puzzle_8';
import { expect } from 'chai';
import 'mocha';
import * as fs from 'fs';

describe('Solution 2 (Day 4)', () => {
  class InputOutput {
    constructor(readonly input: number, readonly output: boolean) {}
  }

  const tests: Array<InputOutput> = [
    new InputOutput(111111, false),
    new InputOutput(223450, false),
    new InputOutput(123789, false),
    new InputOutput(112233, true),
    new InputOutput(123444, false),
    new InputOutput(111122, true),
  ];

  for (const [index, test] of tests.entries()) {
    it(`checks criteria correctly ${index}`, () => {
      expect(checkCriteriaExtended(test.input)).to.equals(test.output);
    });
  }

  const values = fs
    .readFileSync('tests/inputs/input7.txt')
    .toString()
    .split('-')
    .map(Number);

  it('returns a corrent result', () => {
    expect(solution8(values[0], values[1])).to.equal(1111);
  });
});
