const testCases = [
  [
    [
      [
        [-1, 1, 0, -1, 1],
        [1, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
      ],
    ],
    2,
    "Tomatoes will be rotten in 2 days",
  ],
  [
    [
      [
        [-1, 1, 0, -1, 1],
        [0, 0, 1, -1, 1],
        [1, 0, 0, -1, 1],
      ],
    ],
    -1,
    "All tomatoes cannot be rotten",
  ],
  [
    [
      [
        [-1, 1, 0, 0, 1],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
    ],
    -1,
    "All tomatoes cannot be rotten",
  ],
];

function main(tomatoGrid) {
  // complete this function
  if (!tomatoGrid || tomatoGrid.length === 0) return -1;

  let fresh = 0;
  let queue = [];
  const count = () => {
    //Count of fresh and Rotten
    for (let row = 0; row < tomatoGrid.length; row++) {
      for (let col = 0; col < tomatoGrid[0].length; col++) {
        if (tomatoGrid[row][col] === -1) queue.push({ row, col });
        else if (tomatoGrid[row][col] === 1) fresh++;
      }
    }
  };

  const markRotten = (row, col) => {
    // mark neighbours as rotten
    if (row > 0 && tomatoGrid[row - 1][col] === 1) {
      tomatoGrid[row - 1][col] = -1;
      queue.push({ row: row - 1, col });
      fresh--;
    }
    if (col > 0 && tomatoGrid[row][col - 1] === 1) {
      tomatoGrid[row][col - 1] = -1;
      queue.push({ row, col: col - 1 });
      fresh--;
    }
    if (row < tomatoGrid.length - 1 && tomatoGrid[row + 1][col] === 1) {
      tomatoGrid[row + 1][col] = -1;
      queue.push({ row: row + 1, col });
      fresh--;
    }
    if (col < tomatoGrid[0].length - 1 && tomatoGrid[row][col + 1] === 1) {
      queue.push({ row, col: col + 1 });
      tomatoGrid[row][col + 1] = -1;
      fresh--;
    }
  };

  count();

  if (fresh === 0) return 0;

  let minutes = 0;
  while (queue.length > 0) {
    // for every cycle, we empty the whole queue
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      // for each rotten tomato
      let { row, col } = queue.shift(); //Remove first element from queue
      markRotten(row, col);
    }

    // cycle is over, queue contains the next rotten tomato
    minutes++;
  }

  // check there are still fresh tomato
  if (fresh > 0) return -1;
  return minutes - 1;
}

testCases.forEach(([input, expectedResult, message]) => {
  console.assert(main(...input) === expectedResult, message);
  // console.log(main(...input) === expectedResult, message);
});
