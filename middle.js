// Get the length of the array
// if the array's length is less than or equal to 2, return empty array
// if the length of the array is divisible by 2
// Get the element from array[length/2] and array[length/2 -1]
// if the lenght is NOT divisible by 2
// Get the elemnt from array[Math.floor(length/2)]

const middle = (arr) => {
  const length = arr.length;
  const halfLength = length / 2;
  let middleElements = [];

  if (arr.length <= 2) {
    return [];
  }

  if (length % 2 === 0) {
    middleElements.push(arr[halfLength - 1], arr[halfLength]);
  } else {
    middleElements.push(arr[Math.floor(halfLength)]);
  }

  return middleElements;
};

module.exports = middle;

