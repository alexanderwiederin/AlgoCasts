// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  const result = [];
  const recursiveFunction = (leftArray, subarray = []) => {
    subarray.push(leftArray[0]);
    if (leftArray.length === 1) {
      result.push(subarray);
    } else if (subarray.length === size) {
      result.push(subarray);
      recursiveFunction(leftArray.slice(1));
    } else {
      recursiveFunction(leftArray.slice(1), subarray);
    }
  };
  recursiveFunction(array);
  return result;
};

module.exports = chunk;
