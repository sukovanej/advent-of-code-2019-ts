import { solution7 } from './puzzle_7';

export function checkCriteriaExtended(value: number): boolean {
  let foundDoble = false;
  let previous = 0;

  let [currentNumber, currentCounter] = [0, 0];
  const numberArray = String(value)
    .split('')
    .map(Number);

  for (const n of numberArray) {
    if (n != currentNumber) {
      if (currentCounter == 2) {
        foundDoble = true;
      }

      [currentNumber, currentCounter] = [n, 1];
    } else {
      currentCounter += 1;
    }

    if (n < previous) {
      return false;
    }

    previous = n;
  }

  return currentCounter == 2 || foundDoble;
}

export const solution8 = (valueMin: number, valueMax: number): number => {
  return solution7(valueMin, valueMax, checkCriteriaExtended);
};
