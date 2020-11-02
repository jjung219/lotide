const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
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

  const itemsToCount = {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  }
  const resultObj = countOnly(firstNames, itemsToCount);

  it("The returned object must have a key of 'Jason' with a value of 1", () => {

    const result = resultObj["Jason"];
    assert.strictEqual(result, 1);
  })

  it("The returned object must have a key of 'Fang' with a value of 2", () => {

    const result = resultObj["Fang"];
    assert.strictEqual(result, 2);
  })

  it("The returned object's 'Karima' key is undefined as it doesn't exist", () => {
    const result = resultObj["Karima"];
    assert.strictEqual(result, undefined);
  })
})

