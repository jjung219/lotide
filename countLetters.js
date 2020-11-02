const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//PLAN
//
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

// console.log(countLetters("lighthouse labs"));

module.exports = countLetters;