/**
 *Напишите функцию, которая возвращает функцию, которая
 * 1) преобразует все заглавные буквы в строчные.
 * 2) удаляет все небуквенно-цифровые символы
 * 3) возвращает результат вызова функции isPalindrome из объекта TestUtils.
 *
 * Примечание. Буквенно-цифровые символы включают буквы и цифры.
 *
 * Примечание. Вы ДОЛЖНЫ вызвать функцию isPalindrome из объекта TestUtils.
 * Примечание. НЕ требуйте и не импортируйте TestUtils из файла test/testUtils.
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function (input) {
    const lower = input.toLowerCase();
    const clean = lower.replace(/[^a-z0-9]/g, '');
    return TestUtils.isPalindrome.call({ str: clean });
  };
};
