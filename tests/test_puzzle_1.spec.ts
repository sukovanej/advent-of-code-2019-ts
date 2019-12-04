import solution_1 from '../src/puzzle_1';
import { expect } from 'chai';
import 'mocha';

describe('Solution 1 (Day 1)', () => {
    class InputOutput {
        constructor(readonly input: number, readonly output: number) { }
    }

    let tests: Array<InputOutput> = [
        new InputOutput(12, 2),
        new InputOutput(14, 2),
        new InputOutput(1969, 654),
        new InputOutput(100756, 33583),
    ];

    for (let [index, test] of tests.entries()) {
        it(`pass for example case ${index}`, () => {
            expect(solution_1(test.input)).to.equals(test.output);
        });
    }
});