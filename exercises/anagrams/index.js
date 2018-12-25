// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = string => string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');



module.exports = anagrams;

// const anagrams = (stringA, stringB) => {
//   const stringBMap = buildCharMap(stringA);
//   const stringAMap = buildCharMap(stringB);
//   if (Object.keys(stringBMap).length !== Object.keys(stringAMap).length) {
//     return false;
//   }
//   for (let character in stringAMap) {
//     if (stringAMap[character] !== stringBMap[character]) {
//       return false;
//     }
//   }
//   return true;
// };

// const buildCharMap = (str) => {
//   return str.replace(/[^\w]/g, '').split('').reduce((acc, character) => {
//     acc[character.toLowerCase()] = acc[character.toLowerCase()] + 1 || 1;
//     return acc;
//   }, {});
// }
