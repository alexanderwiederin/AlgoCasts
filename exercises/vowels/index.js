// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

// const vowels = (str) => {
//   return str.split('').reduce((counter, character) => {
//     if (vowelsArray.includes(character.toLowerCase())) {
//       counter++;
//     }
//     return counter;
//   }, 0);
// }

const vowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
