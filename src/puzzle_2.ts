import solution1 from './puzzle_1';

export default function solution2(mass: number): number {
  const fuel = solution1(mass);
  if (fuel <= 0) return 0;
  return fuel + solution2(fuel);
}
