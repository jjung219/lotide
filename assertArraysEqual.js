const eqArrays = (arrOne, arrTwo) => {
  let result = true;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result;
};

const assertArraysEqaul = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
      ? `✅✅✅Assertion Passed: ${actual} === ${expected}`
      : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`
  );
};

//Implement assertArraysEqaul function
// Takes two arrays
// console.log a message simmilar to assertEqual
