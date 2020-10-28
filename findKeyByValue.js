const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (obj, value) => {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
