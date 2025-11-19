/**
 * Напишите функцию, которая возвращает функцию форматирования для форматирования адреса на основе входных данных адреса.
 * Порядок массива определяет формат по индексу строки в массиве.
 * В строке адреса результата все объекты должны быть разделены знаком ',', кроме последнего (без ', ' в конце)
 * Пример:
 * order = ['город', 'улица', 'дом', 'квартира', 'почтовый индекс', 'страна']
 * дает строку адреса, например: «город, улица, дом, квартира, почтовый индекс, страна»
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function (address) {
    var resultParts = [];

    for (var i = 0; i < order.length; i++) {
      var key = order[i];
      resultParts.push(address[key]);
    }

    return resultParts.join(', ');
  };
};
