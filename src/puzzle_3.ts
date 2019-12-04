const instructionMap = {
  1: (left: number, right: number): number => left + right,
  2: (left: number, right: number): number => left * right,
};

export default function solution3(inputList: Array<number>): Array<number> {
  const newList = [...inputList];

  for (let i = 0; i <= newList.length; i += 4) {
    const opCode = newList[i];
    if (opCode == 99) break;

    const [left, right, result] = newList.slice(i + 1, i + 4);
    newList[result] = instructionMap[opCode](newList[left], newList[right]);
  }

  return newList;
}
