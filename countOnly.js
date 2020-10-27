const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const createObject = (allItems, itemsToCount) => {
  let itemsWithTruthyValues = {};

  for (const itemToCount in itemsToCount) {
    if (itemsToCount[itemToCount] && allItems.includes(itemToCount)) {
      itemsWithTruthyValues[itemToCount] = 0;
    }
  }

  return itemsWithTruthyValues;
};

const countOnly = function (allItems, itemsToCount) {
  // Object with truthy values and with itmes that match the allItems
  let finalObject = createObject(allItems, itemsToCount);

  for (const item of allItems) {
    if (itemsToCount[item]) {
      finalObject[item] += 1;
    }
  }
  return finalObject;
};

//TEST
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
