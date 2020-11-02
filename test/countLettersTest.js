const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("should return { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 } for 'lighthouse labs'", () => {
    assert.deepEqual(countLetters("lighthouse labs"), { l: 2, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 2, e: 1, a: 1, b: 1 })
  })
})
