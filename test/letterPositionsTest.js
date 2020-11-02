const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  const resultObj = letterPositions("lighthouse in the house");

  it("should return [1,11] for the letter i's position", () => {
    const result = resultObj['i'];
    assert.deepEqual(result, [1, 11]);
  })

  it("should return [3, 5, 15, 18] for the letter h's position", () => {
    const result = resultObj['h'];
    assert.deepEqual(result, [3, 5, 15, 18]);
  })

  it("should return an object { l: [ 0 ], i: [ 1, 11 ], g: [ 2 ], h: [ 3, 5, 15, 18 ], t: [ 4, 14 ], o: [ 6, 19 ], u: [ 7, 20 ], s: [ 8, 21 ], e: [ 9, 16, 22 ], n: [ 12 ] } ", () => {

    assert.deepEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] })
  })


})
