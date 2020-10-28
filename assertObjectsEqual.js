const eqArrays = (arrOne, arrTwo) => {
  if (arrOne.length !== arrTwo.length) return false;

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;

  console.log(
    eqObjects(actual, expected)
      ? `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      : `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

//TEST
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc); // => passes

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2); // => fails
