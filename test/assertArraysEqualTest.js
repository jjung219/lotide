const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]);
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]);

assertArraysEqual([[2, 3], [4]], [[2, 3], 4]);