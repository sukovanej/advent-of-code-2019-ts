import solution3 from './puzzle_3';

export default function solution4(inputList: Array<number>, desiredValue: number): number {
  for (let i = 0; i < inputList.length; i++) {
    for (let j = 0; j < inputList.length; j++) {
      inputList[1] = i;
      inputList[2] = j;

      const result = solution3(inputList);

      if (result[0] == desiredValue) {
        return 100 * result[1] + result[2];
      }
    }
  }
}
