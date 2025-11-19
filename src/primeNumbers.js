/**
 Сделайте функцию, которая создаёт другую функцию.
А эта вторая функция должна взять два числа — начало и конец — и вернуть массив всех простых чисел между ними, включая границы.
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(n) {
    if (n < 2) return false;

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  return function (start, end) {
    var result = [];

    if (end > highestNumber) {
      end = highestNumber;
    }

    for (var num = start; num <= end; num++) {
      if (isPrime(num)) {
        result.push(num);
      }
    }

    return result;
  };
};
