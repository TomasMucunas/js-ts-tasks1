/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let longest = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      let temp = '';
      let x = i;
      let y = j;

      while (x < str1.length && y < str2.length && str1[x] === str2[y]) {
        temp += str1[x];
        x++;
        y++;
      }

      if (temp.length > longest.length) {
        longest = temp;
      }
    }
  }

  return longest;
};
