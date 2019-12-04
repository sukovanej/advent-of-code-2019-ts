export interface CheckCriteria {
  (value: number): boolean;
}

export function checkCriteria(value: number): boolean {
  let foundDouble = false;
  let previous = 0;
  const numberList = String(value)
    .split('')
    .map(Number);

  for (const n of numberList) {
    if (n < previous) {
      return false;
    }

    if (n == previous) {
      foundDouble = true;
    }

    previous = n;
  }

  return foundDouble;
}

export function solution7(
  valueMin: number,
  valueMax: number,
  checkCriteriaCallable: CheckCriteria = checkCriteria,
): number {
  let counter = 0;

  for (let i = valueMin; i <= valueMax; i++) {
    if (checkCriteriaCallable(i)) {
      counter += 1;
    }
  }

  return counter;
}
