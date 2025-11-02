/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, n) {
  if (n > str.length) {
    return str;
  }
  let endPart = str.slice(str.length - n);

  let result = endPart + str + endPart;

  return result;
};
