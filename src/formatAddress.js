/**
 Сделайте функцию, которая создаёт другую функцию. Эта вторая функция должна брать объект с адресом и возвращать одну строку вида:
«улица, дом, квартира, город, почтовый индекс, страна».
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (address) {
    return (
      address.street +
      ', ' +
      address.house +
      ', ' +
      address.apartment +
      ', ' +
      address.city +
      ', ' +
      address.postalCode +
      ', ' +
      address.country
    );
  };
};
