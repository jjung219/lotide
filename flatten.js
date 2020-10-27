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

// nested array
// loop over each element in the main array
// declare an empty array
// newArr.push(each_element)
// implement condition where if the element is an array with .isArray, then loop over that array and and newArr.push(each_element)
//
// return newArr

const flatten = (nestedArr) => {
  let flattenedArr = [];

  for (element of nestedArr) {
    if (Array.isArray(element)) {
      element.forEach((el) => flattenedArr.push(el));
    } else {
      flattenedArr.push(element);
    }
  }

  return flattenedArr;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, "a", ["b", 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
