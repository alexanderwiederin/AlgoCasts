// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// const pyramid = (n) => {
//   const rowLength = (n * 2) - 1;
//   const center = Math.floor(rowLength / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < rowLength; column++) {
//       if (column >= center - row && column <= center + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

const pyramid = (n, row = 0, level = '') => {
  const rowLength = (n * 2) - 1;
  if (row === n) {
    return;
  } else if (level.length === rowLength) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  } 
  const center = Math.floor(rowLength / 2);
  const add = level.length >= center - row && level.length <= center + row ? '#' : ' ';
  pyramid(n, row, level + add);
}

module.exports = pyramid;
