const letterPositions = (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (sentence[i] !== " ") {
      results[element] ? results[element].push(i) : (results[element] = [i]);
    }
  }

  return results;
};


module.exports = letterPositions;