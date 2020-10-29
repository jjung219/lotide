const findKey = (obj, callback) => {
  //return the first key for which the callback returns a truthy value
  // If no key is found, return undefined
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"
assertEqual(result1, "noma");
