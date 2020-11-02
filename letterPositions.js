const eqArrays = (arrOne, arrTwo) => {
  let result = true;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
      ? `✅✅✅Assertion Passed: ${actual} === ${expected}`
      : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`
  );
};

const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (sentence[i] !== " ") {
      results[element] ? results[element].push(i) : (results[element] = [i]);
    }
  }

  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));

module.exports = letterPositions;