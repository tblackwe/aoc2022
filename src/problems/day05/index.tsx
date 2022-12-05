interface Input {
  stacks: string[];
  commands: string[];
}
const testInput = {
  stacks: ["    [D]    ", "[N] [C]    ", "[Z] [M] [P]", " 1   2   3 "],
  commands: [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ],
};

const rawInput = {
  stacks: [
    "[V]     [B]                     [C]",
    "[C]     [N] [G]         [W]     [P]",
    "[W]     [C] [Q] [S]     [C]     [M]",
    "[L]     [W] [B] [Z]     [F] [S] [V]",
    "[R]     [G] [H] [F] [P] [V] [M] [T]",
    "[M] [L] [R] [D] [L] [N] [P] [D] [W]",
    "[F] [Q] [S] [C] [G] [G] [Z] [P] [N]",
    "[Q] [D] [P] [L] [V] [D] [D] [C] [Z]",
    " 1   2   3   4   5   6   7   8   9 ",
  ],
  commands: [
    "move 1 from 9 to 2",
    "move 4 from 6 to 1",
    "move 4 from 2 to 6",
    "move 5 from 8 to 7",
    "move 4 from 9 to 2",
    "move 1 from 5 to 8",
    "move 1 from 3 to 1",
    "move 2 from 3 to 1",
    "move 1 from 4 to 2",
    "move 11 from 7 to 2",
    "move 5 from 5 to 1",
    "move 1 from 6 to 8",
    "move 1 from 7 to 6",
    "move 3 from 6 to 7",
    "move 1 from 3 to 2",
    "move 1 from 6 to 8",
    "move 11 from 2 to 1",
    "move 1 from 9 to 8",
    "move 1 from 3 to 7",
    "move 4 from 7 to 9",
    "move 3 from 3 to 7",
    "move 4 from 8 to 2",
    "move 3 from 7 to 6",
    "move 2 from 6 to 3",
    "move 5 from 4 to 1",
    "move 1 from 6 to 5",
    "move 26 from 1 to 7",
    "move 1 from 4 to 6",
    "move 22 from 7 to 5",
    "move 4 from 9 to 1",
    "move 3 from 7 to 3",
    "move 1 from 6 to 3",
    "move 6 from 1 to 7",
    "move 2 from 7 to 5",
    "move 8 from 1 to 9",
    "move 4 from 3 to 4",
    "move 10 from 2 to 7",
    "move 6 from 7 to 4",
    "move 2 from 9 to 5",
    "move 1 from 5 to 1",
    "move 8 from 4 to 1",
    "move 2 from 5 to 9",
    "move 1 from 3 to 6",
    "move 1 from 9 to 1",
    "move 1 from 3 to 6",
    "move 2 from 5 to 2",
    "move 1 from 4 to 2",
    "move 1 from 2 to 3",
    "move 7 from 1 to 4",
    "move 9 from 7 to 4",
    "move 1 from 3 to 4",
    "move 2 from 2 to 4",
    "move 5 from 9 to 6",
    "move 1 from 4 to 5",
    "move 2 from 9 to 3",
    "move 1 from 1 to 6",
    "move 2 from 6 to 1",
    "move 2 from 6 to 5",
    "move 2 from 9 to 7",
    "move 1 from 3 to 9",
    "move 1 from 9 to 5",
    "move 2 from 7 to 3",
    "move 1 from 1 to 7",
    "move 7 from 4 to 5",
    "move 2 from 1 to 2",
    "move 3 from 3 to 8",
    "move 3 from 8 to 9",
    "move 31 from 5 to 8",
    "move 1 from 7 to 1",
    "move 1 from 2 to 1",
    "move 1 from 1 to 5",
    "move 1 from 5 to 6",
    "move 2 from 5 to 7",
    "move 10 from 4 to 9",
    "move 5 from 6 to 2",
    "move 3 from 2 to 6",
    "move 2 from 7 to 8",
    "move 1 from 6 to 3",
    "move 1 from 4 to 1",
    "move 1 from 3 to 6",
    "move 1 from 4 to 2",
    "move 2 from 1 to 2",
    "move 1 from 8 to 7",
    "move 10 from 8 to 2",
    "move 13 from 2 to 9",
    "move 1 from 1 to 5",
    "move 18 from 8 to 2",
    "move 21 from 9 to 6",
    "move 1 from 7 to 8",
    "move 2 from 9 to 7",
    "move 1 from 2 to 3",
    "move 1 from 7 to 8",
    "move 9 from 2 to 4",
    "move 1 from 7 to 8",
    "move 3 from 9 to 1",
    "move 1 from 8 to 1",
    "move 6 from 2 to 3",
    "move 5 from 4 to 7",
    "move 1 from 5 to 8",
    "move 2 from 4 to 3",
    "move 5 from 7 to 3",
    "move 2 from 2 to 7",
    "move 15 from 6 to 1",
    "move 12 from 1 to 2",
    "move 6 from 2 to 9",
    "move 4 from 9 to 5",
    "move 4 from 5 to 6",
    "move 14 from 3 to 9",
    "move 1 from 6 to 7",
    "move 1 from 7 to 2",
    "move 1 from 7 to 8",
    "move 9 from 2 to 6",
    "move 1 from 1 to 6",
    "move 2 from 9 to 8",
    "move 4 from 9 to 7",
    "move 1 from 1 to 5",
    "move 8 from 8 to 3",
    "move 1 from 5 to 4",
    "move 2 from 1 to 2",
    "move 3 from 1 to 4",
    "move 9 from 6 to 2",
    "move 1 from 7 to 4",
    "move 1 from 8 to 2",
    "move 1 from 6 to 4",
    "move 4 from 7 to 8",
    "move 12 from 6 to 8",
    "move 3 from 2 to 1",
    "move 6 from 8 to 7",
    "move 5 from 3 to 6",
    "move 3 from 3 to 6",
    "move 3 from 1 to 3",
    "move 8 from 2 to 9",
    "move 2 from 4 to 5",
    "move 2 from 7 to 2",
    "move 10 from 8 to 5",
    "move 3 from 3 to 2",
    "move 10 from 5 to 3",
    "move 1 from 4 to 3",
    "move 1 from 2 to 1",
    "move 1 from 1 to 7",
    "move 14 from 9 to 6",
    "move 5 from 2 to 4",
    "move 15 from 6 to 5",
    "move 3 from 9 to 3",
    "move 1 from 8 to 6",
    "move 1 from 3 to 8",
    "move 7 from 3 to 8",
    "move 16 from 5 to 1",
    "move 2 from 7 to 1",
    "move 1 from 5 to 9",
    "move 2 from 9 to 3",
    "move 15 from 1 to 5",
    "move 3 from 8 to 2",
    "move 3 from 3 to 1",
    "move 3 from 7 to 3",
    "move 8 from 4 to 6",
    "move 5 from 1 to 6",
    "move 9 from 5 to 7",
    "move 2 from 8 to 3",
    "move 2 from 2 to 7",
    "move 1 from 1 to 4",
    "move 2 from 5 to 8",
    "move 4 from 3 to 1",
    "move 4 from 8 to 1",
    "move 1 from 8 to 6",
    "move 9 from 7 to 6",
    "move 2 from 7 to 5",
    "move 3 from 1 to 8",
    "move 1 from 4 to 8",
    "move 1 from 2 to 4",
    "move 12 from 6 to 2",
    "move 3 from 8 to 6",
    "move 1 from 4 to 7",
    "move 2 from 6 to 8",
    "move 5 from 5 to 9",
    "move 13 from 2 to 9",
    "move 2 from 4 to 7",
    "move 13 from 9 to 5",
    "move 2 from 6 to 5",
    "move 1 from 3 to 9",
    "move 6 from 9 to 4",
    "move 5 from 1 to 3",
    "move 1 from 7 to 9",
    "move 15 from 5 to 8",
    "move 2 from 4 to 7",
    "move 2 from 4 to 6",
    "move 1 from 4 to 6",
    "move 1 from 5 to 7",
    "move 18 from 6 to 2",
    "move 2 from 7 to 3",
    "move 3 from 6 to 7",
    "move 3 from 2 to 8",
    "move 5 from 7 to 3",
    "move 1 from 9 to 6",
    "move 2 from 3 to 8",
    "move 11 from 3 to 2",
    "move 2 from 2 to 9",
    "move 1 from 6 to 2",
    "move 1 from 7 to 5",
    "move 1 from 5 to 9",
    "move 9 from 8 to 4",
    "move 1 from 4 to 6",
    "move 2 from 3 to 1",
    "move 2 from 1 to 5",
    "move 12 from 8 to 3",
    "move 1 from 8 to 2",
    "move 14 from 3 to 4",
    "move 1 from 6 to 4",
    "move 1 from 5 to 4",
    "move 20 from 2 to 7",
    "move 2 from 9 to 5",
    "move 1 from 5 to 3",
    "move 1 from 9 to 2",
    "move 1 from 2 to 8",
    "move 2 from 2 to 3",
    "move 5 from 4 to 5",
    "move 6 from 5 to 7",
    "move 2 from 8 to 2",
    "move 3 from 3 to 9",
    "move 5 from 4 to 5",
    "move 2 from 9 to 7",
    "move 2 from 2 to 3",
    "move 1 from 9 to 3",
    "move 22 from 7 to 3",
    "move 4 from 7 to 4",
    "move 24 from 3 to 6",
    "move 4 from 2 to 6",
    "move 18 from 6 to 9",
    "move 15 from 4 to 6",
    "move 8 from 6 to 3",
    "move 6 from 6 to 1",
    "move 7 from 9 to 6",
    "move 2 from 7 to 4",
    "move 8 from 3 to 9",
    "move 14 from 6 to 3",
    "move 2 from 3 to 9",
    "move 1 from 9 to 6",
    "move 13 from 9 to 1",
    "move 3 from 4 to 5",
    "move 1 from 9 to 6",
    "move 5 from 1 to 8",
    "move 3 from 3 to 9",
    "move 2 from 1 to 5",
    "move 8 from 5 to 8",
    "move 10 from 3 to 5",
    "move 3 from 4 to 6",
    "move 6 from 1 to 9",
    "move 4 from 5 to 3",
    "move 5 from 8 to 2",
    "move 6 from 6 to 3",
    "move 7 from 3 to 6",
    "move 1 from 3 to 4",
    "move 5 from 8 to 7",
    "move 5 from 2 to 6",
    "move 2 from 7 to 3",
    "move 3 from 7 to 3",
    "move 1 from 4 to 9",
    "move 9 from 6 to 9",
    "move 2 from 6 to 2",
    "move 1 from 8 to 2",
    "move 2 from 8 to 7",
    "move 5 from 1 to 5",
    "move 1 from 1 to 4",
    "move 13 from 5 to 7",
    "move 5 from 3 to 7",
    "move 1 from 5 to 6",
    "move 1 from 4 to 6",
    "move 3 from 2 to 8",
    "move 1 from 3 to 5",
    "move 1 from 3 to 8",
    "move 14 from 7 to 4",
    "move 1 from 5 to 6",
    "move 7 from 6 to 9",
    "move 6 from 7 to 9",
    "move 2 from 8 to 9",
    "move 2 from 8 to 1",
    "move 31 from 9 to 1",
    "move 13 from 4 to 2",
    "move 1 from 4 to 3",
    "move 10 from 2 to 7",
    "move 1 from 3 to 4",
    "move 1 from 2 to 7",
    "move 3 from 7 to 8",
    "move 1 from 4 to 1",
    "move 3 from 8 to 5",
    "move 32 from 1 to 5",
    "move 3 from 9 to 7",
    "move 4 from 9 to 6",
    "move 2 from 2 to 7",
    "move 2 from 1 to 7",
    "move 1 from 6 to 1",
    "move 1 from 9 to 4",
    "move 3 from 6 to 4",
    "move 1 from 1 to 8",
    "move 15 from 5 to 1",
    "move 1 from 8 to 4",
    "move 9 from 5 to 7",
    "move 1 from 9 to 8",
    "move 1 from 8 to 1",
    "move 10 from 1 to 9",
    "move 1 from 4 to 2",
    "move 2 from 9 to 5",
    "move 4 from 9 to 6",
    "move 1 from 2 to 7",
    "move 3 from 4 to 2",
    "move 1 from 1 to 5",
    "move 5 from 1 to 5",
    "move 1 from 4 to 9",
    "move 3 from 6 to 7",
    "move 23 from 7 to 6",
    "move 1 from 2 to 4",
    "move 1 from 2 to 5",
    "move 9 from 5 to 4",
    "move 1 from 2 to 5",
    "move 9 from 5 to 6",
    "move 1 from 9 to 7",
    "move 1 from 9 to 3",
    "move 3 from 9 to 4",
    "move 14 from 6 to 3",
    "move 5 from 7 to 4",
    "move 1 from 7 to 5",
    "move 1 from 5 to 9",
    "move 2 from 5 to 6",
    "move 16 from 6 to 2",
    "move 2 from 6 to 1",
    "move 7 from 4 to 8",
    "move 2 from 1 to 2",
    "move 4 from 3 to 5",
    "move 5 from 4 to 7",
    "move 2 from 6 to 7",
    "move 4 from 4 to 1",
    "move 4 from 8 to 9",
    "move 1 from 4 to 5",
    "move 1 from 6 to 8",
    "move 1 from 4 to 9",
    "move 4 from 1 to 7",
    "move 1 from 9 to 4",
    "move 2 from 2 to 7",
    "move 7 from 3 to 9",
    "move 15 from 2 to 3",
    "move 4 from 8 to 6",
    "move 1 from 4 to 7",
    "move 2 from 9 to 7",
    "move 1 from 6 to 8",
    "move 2 from 7 to 2",
    "move 5 from 7 to 2",
    "move 1 from 5 to 2",
    "move 6 from 2 to 9",
    "move 3 from 7 to 1",
    "move 3 from 1 to 2",
    "move 3 from 7 to 1",
    "move 2 from 2 to 9",
    "move 2 from 6 to 9",
    "move 1 from 8 to 3",
    "move 19 from 3 to 9",
    "move 1 from 6 to 3",
    "move 3 from 7 to 4",
    "move 1 from 2 to 5",
    "move 2 from 1 to 9",
    "move 2 from 2 to 3",
    "move 33 from 9 to 7",
    "move 1 from 1 to 7",
    "move 3 from 3 to 7",
    "move 1 from 3 to 2",
    "move 1 from 5 to 8",
    "move 4 from 9 to 7",
    "move 1 from 5 to 2",
    "move 2 from 4 to 9",
    "move 4 from 9 to 7",
    "move 3 from 2 to 1",
    "move 1 from 4 to 3",
    "move 1 from 9 to 7",
    "move 1 from 8 to 3",
    "move 7 from 7 to 3",
    "move 3 from 1 to 9",
    "move 4 from 9 to 7",
    "move 4 from 5 to 8",
    "move 3 from 3 to 4",
    "move 3 from 4 to 5",
    "move 3 from 3 to 6",
    "move 2 from 6 to 5",
    "move 38 from 7 to 5",
    "move 40 from 5 to 3",
    "move 4 from 8 to 9",
    "move 1 from 6 to 9",
    "move 1 from 5 to 1",
    "move 3 from 7 to 6",
    "move 1 from 7 to 5",
    "move 38 from 3 to 8",
    "move 1 from 1 to 9",
    "move 3 from 9 to 6",
    "move 5 from 3 to 9",
    "move 4 from 8 to 6",
    "move 1 from 7 to 1",
    "move 3 from 5 to 9",
    "move 1 from 1 to 2",
    "move 10 from 8 to 3",
    "move 5 from 8 to 1",
    "move 3 from 1 to 2",
    "move 9 from 6 to 7",
    "move 9 from 3 to 5",
    "move 1 from 7 to 6",
    "move 1 from 3 to 8",
    "move 1 from 7 to 9",
    "move 1 from 1 to 5",
    "move 1 from 1 to 3",
    "move 1 from 9 to 2",
    "move 4 from 2 to 3",
    "move 1 from 2 to 4",
    "move 9 from 8 to 1",
    "move 2 from 9 to 5",
    "move 2 from 1 to 2",
    "move 2 from 3 to 4",
    "move 6 from 8 to 6",
    "move 10 from 5 to 3",
    "move 7 from 3 to 2",
    "move 2 from 1 to 2",
    "move 5 from 1 to 7",
    "move 7 from 9 to 6",
    "move 7 from 6 to 5",
    "move 1 from 4 to 3",
    "move 7 from 7 to 4",
    "move 5 from 3 to 9",
    "move 7 from 2 to 6",
    "move 4 from 7 to 8",
    "move 5 from 8 to 9",
    "move 1 from 2 to 6",
    "move 1 from 3 to 5",
    "move 2 from 2 to 8",
    "move 8 from 4 to 6",
    "move 7 from 9 to 7",
    "move 4 from 7 to 9",
    "move 7 from 9 to 3",
    "move 8 from 3 to 1",
    "move 6 from 5 to 9",
    "move 8 from 1 to 8",
    "move 13 from 8 to 4",
    "move 3 from 9 to 6",
    "move 1 from 8 to 6",
    "move 1 from 7 to 3",
    "move 2 from 4 to 1",
    "move 5 from 9 to 1",
    "move 1 from 3 to 7",
    "move 15 from 6 to 1",
    "move 1 from 7 to 9",
    "move 10 from 4 to 7",
    "move 11 from 7 to 5",
    "move 17 from 1 to 6",
    "move 1 from 9 to 3",
    "move 6 from 6 to 1",
    "move 3 from 5 to 3",
    "move 2 from 4 to 5",
    "move 2 from 7 to 8",
    "move 12 from 5 to 3",
    "move 13 from 6 to 9",
    "move 2 from 8 to 2",
    "move 2 from 5 to 1",
    "move 16 from 3 to 8",
    "move 3 from 2 to 3",
    "move 2 from 3 to 7",
    "move 2 from 7 to 9",
    "move 1 from 3 to 7",
    "move 4 from 8 to 4",
    "move 2 from 4 to 8",
    "move 5 from 1 to 5",
    "move 2 from 4 to 7",
    "move 6 from 6 to 8",
    "move 2 from 8 to 5",
    "move 2 from 1 to 4",
    "move 5 from 8 to 7",
    "move 5 from 6 to 3",
    "move 6 from 9 to 8",
    "move 2 from 9 to 2",
    "move 1 from 1 to 7",
    "move 4 from 5 to 3",
    "move 2 from 2 to 3",
    "move 1 from 4 to 9",
    "move 10 from 3 to 6",
    "move 1 from 3 to 7",
    "move 10 from 7 to 2",
    "move 2 from 5 to 3",
    "move 1 from 4 to 2",
    "move 2 from 6 to 8",
    "move 3 from 6 to 5",
    "move 1 from 6 to 1",
    "move 7 from 2 to 3",
    "move 6 from 8 to 7",
    "move 4 from 6 to 3",
    "move 14 from 8 to 6",
    "move 11 from 6 to 8",
    "move 1 from 1 to 4",
    "move 6 from 7 to 2",
    "move 3 from 5 to 8",
    "move 4 from 1 to 7",
    "move 1 from 2 to 8",
    "move 1 from 2 to 6",
    "move 1 from 3 to 4",
    "move 1 from 5 to 6",
    "move 7 from 8 to 6",
    "move 9 from 3 to 2",
    "move 1 from 8 to 5",
  ],
};

const day05 = () => {
  function transpose(original: string[][]) {
    var copy: string[][] = [];
    for (var i = 0; i < original.length; ++i) {
      for (var j = 0; j < original[i].length; ++j) {
        // skip undefined values to preserve sparse array
        if (original[i][j] === undefined) continue;
        // create row if it doesn't exist yet
        if (copy[j] === undefined) copy[j] = [];
        // swap the x and y coords for the copy
        copy[j][i] = original[i][j];
      }
    }
    return copy;
  }
  const createStacks = (stacks: string[]) => {
    const arrayMap: string[][] = stacks.map((row) => {
      return row.split("");
    });
    const transposedArrayMap = transpose(arrayMap);
    const rotatedStacks = transposedArrayMap.filter(
      (row) => row[row.length - 1] !== " "
    );
    const finalStacks = rotatedStacks.map((row) =>
      row.reverse().filter((item) => item !== " ")
    );
    return finalStacks;
  };
  interface Commands {
    move: number;
    source: number;
    destination: number;
  }

  const createCommands = (rawCommands: string[]): any => {
    return rawCommands.map((command) => {
      const matched = command.match(/move (\d+) from (\d+) to (\d+)/);
      if (matched)
        return {
          move: matched[1],
          source: matched[2],
          destination: matched[3],
        };
    });
  };

  const exercise1 = (input: Input) => {
    const stackArray = createStacks(input.stacks);
    const commands: Commands[] = createCommands(input.commands);
    commands.forEach((command) => {
      const tempStack = [];
      for (let i = 0; i < command.move; i++) {
        tempStack.push(stackArray[command.source - 1].pop());
      }
      tempStack.forEach((temp) => {
        stackArray[command.destination - 1].push(temp ? temp : "");
      });
    });
    return stackArray.map((stack) => stack[stack.length - 1]).join("");
  };

  const exercise2 = (input: Input) => {
    const stackArray = createStacks(input.stacks);
    const commands: Commands[] = createCommands(input.commands);
    commands.forEach((command) => {
      const tempStack = [];
      for (let i = 0; i < command.move; i++) {
        tempStack.push(stackArray[command.source - 1].pop());
      }
      tempStack.reverse().forEach((temp) => {
        stackArray[command.destination - 1].push(temp ? temp : "");
      });
    });
    return stackArray.map((stack) => stack[stack.length - 1]).join("");
  };

  console.log("e1", exercise1(rawInput));
  console.log("e2", exercise2(rawInput));
};

export default day05;
