// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const matrix = (n) => {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  };

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top Row
    for (let column = startColumn; column <= endColumn; column++) {
      results[startRow][column] = counter;
      counter++;
    }
    startRow++;

    // Right Column
    for (let row = startRow; row <= endRow; row++) {
      results[row][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom Row
    for (let column = endColumn; column >= startColumn; column--) {
      results[endRow][column] = counter;
      counter++;
    }
    endRow--;

    // Left Column
    for (let row = endRow; row >= startRow; row--) {
      results[row][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
