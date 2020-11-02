const countOnly = (allItems, itemsToCount) => {
  let result = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};


module.exports = countOnly;