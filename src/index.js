module.exports = function longestConsecutiveLength(array) {
  if (!array) {
    return 0;
  }
  const nums = new Set(array);
  const length = array.length;

  let maxConcecutiveNumber = 0;
  for (let i = 0; i < length; i++) {
    if (!nums.has(array[i] - 1)) {
      let temp = array[i];
      while (nums.has(temp)) {
        temp++;
      }
      if (maxConcecutiveNumber < temp - array[i])
        maxConcecutiveNumber = temp - array[i];
    }
  }
  return maxConcecutiveNumber;
};
