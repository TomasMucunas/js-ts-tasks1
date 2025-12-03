/**
 * Напишите функцию, которая возвращает функцию, которая будет сортировать все свои аргументы по порядку.
 * указывается функцией sortComparator из объекта TestUtils
 *
 * Примечание. Вы ДОЛЖНЫ использовать функцию sortComparator из объекта TestUtils.
 * Примечание. НЕ требуйте и не импортируйте TestUtils из файла test/testUtils.
 *
 * @param {{ sortComparator: function() }} TestUtils
 * @returns {function}
 */
module.exports.sort = function sort(TestUtils) {
  return function (...args) {
    return args.sort(TestUtils.sortComparator);
  };
};
