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

module.exports = eqArrays;