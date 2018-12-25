// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// const steps = (n) => {
//   for (let i = 1; i <= n; i += 1) {
//     let step = '';
//     for (let j = 1; j <= n; j += 1) {
//       if (j <= i) {
//         step += '#';
//       } else {
//         step += ' ';
//       }
//     }
//     console.log(step);
//   }
// }

const steps = (n, row = 0, stair = '') => {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    steps(n, row + 1);
    return;
  }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
