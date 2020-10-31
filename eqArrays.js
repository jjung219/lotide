const assertEqual = (actual, expected) => {
  // go through the values one by on
  // compare the values at the same index
  // if they are the same, move on. If they aren't the same, stop the loop
  // print out false if the loop was stopped, true if the loop kept going

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false;

  for (let i = 0; i < arrOne.length; i++) {
    if (Array.isArray(arrOne[i])) {
      if (!eqArrays(arrOne[i], arrTwo[i])) {
        return false;
      }
    } else if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//Stretch - recursive eqArrays
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
console.log(eqArrays([[2, 3, 7], 4], [[2, 3], 4])) // => false
console.log(eqArrays([[2, 3], [4, 6, 7]], [[2, 3], [4, 6, 7]])) // => true