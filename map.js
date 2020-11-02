// map will take an array to map and a callback function
// returns a new array

const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
      ? `✅✅✅Assertion Passed: ${actual} === ${expected}`
      : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`
  );
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

//Test cases
const gibberish = map(words, (word) => word + "ay");
assertArraysEqual(gibberish, [
  "grounday",
  "controlay",
  "toay",
  "majoray",
  "tomay",
]);

const numbers = [1, 4, 8, 3, 6];
const timesTwo = map(numbers, (num) => num * 2);
assertArraysEqual(timesTwo, [2, 8, 16, 6, 12]);

module.exports = map;