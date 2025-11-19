/**
 Сделайте функцию, которая создаёт другую функцию.
Эта вторая функция должна брать строку и заменять в ней все запрещённые слова (из массива) на звёздочки *.
Количество звёздочек должно быть таким же, как длина найденного слова или фразы.
Переносы строк \n должны остаться как есть.
 * @param {Array} forbidden
 * @returns {function}
 */
module.exports.censorship = function censorship(forbidden) {
  forbidden = forbidden.sort(function (a, b) {
    return b.length - a.length;
  });

  return function (str) {
    for (let word of forbidden) {
      const lowerText = str.toLowerCase();
      const lowerWord = word.toLowerCase();

      let index = lowerText.indexOf(lowerWord);

      while (index !== -1) {
        const len = word.length;

        str = str.slice(0, index) + '*'.repeat(len) + str.slice(index + len);

        const newLower = str.toLowerCase();

        index = newLower.indexOf(lowerWord, index + len);
      }
    }

    return str;
  };
};
