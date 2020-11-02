const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//PLAN
// take in a sentence as a string and then return a count of each of the letters in that sentence as an object
const countLetters = (str) => {
  const noSpace = str.slice().split(" ").join("");
  let result = {};

  for (const letter of noSpace) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse labs"));

module.exports = countLetters;