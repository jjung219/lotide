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

const takeUntil = (array, callback) => {
  //return slice of the array with elements taken from the beginning
  //it should keep going until callback returns a truthy value
  const result = [];
  for (const el of array) {
    if (!callback(el)) {
      result.push(el);
    } else {
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;