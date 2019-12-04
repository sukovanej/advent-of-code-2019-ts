import solution_1 from './puzzle_1';

export default function solution_2(mass: number): number {
    let fuel = solution_1(mass);
    if (fuel <= 0) return 0;
    return fuel + solution_2(fuel);
}