/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique.length;
};
