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

const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
      ? `✅✅✅Assertion Passed: ${actual} === ${expected}`
      : `🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`
  );
};

// Get the length of the array
// if the array's length is less than or equal to 2, return empty array
// if the length of the array is divisible by 2
// Get the element from array[length/2] and array[length/2 -1]
// if the lenght is NOT divisible by 2
// Get the elemnt from array[Math.floor(length/2)]

const middle = (arr) => {
  const length = arr.length;
  const halfLength = length / 2;
  let middleElements = [];

  if (arr.length <= 2) {
    return [];
  }

  if (length % 2 === 0) {
    middleElements.push(arr[halfLength - 1], arr[halfLength]);
  } else {
    middleElements.push(arr[Math.floor(halfLength)]);
  }

  return middleElements;
};

//TEST
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
