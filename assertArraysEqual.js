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

//Implement assertArraysEqaul function
// Takes two arrays
// console.log a message simmilar to assertEqual
