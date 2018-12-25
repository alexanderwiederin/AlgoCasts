// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  let max = '';
  const characters = str.split('').reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});
  for (let i = 0; i < Object.keys(characters).length; i += 1) {
    const character = Object.keys(characters)[i];
    if (!characters[max] || characters[character] > characters[max]) {
      max = character;
    }
  }
  return max;
};

module.exports = maxChar;
