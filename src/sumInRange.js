/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */

module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum = sum + i;
  }

  return sum;
};
