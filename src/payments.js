/**
 * Напишите функцию, которая возвращает функцию
 * расчет, сколько денег будет у человека после расчета всех доходов/долгов
 *
 * доход — это Объект, который может выглядеть так:
 * {
 * зарплата: 100, // зарплата человека
 * инвестиции: 200, // доход человека, который он получает от инвестиционной деятельности
 * }
 *
 * долги — это объект, который может выглядеть так:
 * {
 * rent: 50, // сколько человек должен заплатить за аренду квартиры/дома/и т.д.
 * еда: 25, // сколько человек потратит на еду
 * }
 *
 * В итоге после подсчета всех денег человека у нас будет: 100 + 200 - 50 - 25 = 225, это окончательный ответ.
 *
 * Примечание. Вы ДОЛЖНЫ использовать функцию sumAllObjectProperties из объекта TestUtils, которая будет вычислять все числовые свойства объекта.
 * Примечание. НЕ требуйте и не импортируйте TestUtils из файла test/testUtils.
 *
 * @param {{ sumAllObjectProperties: function() }} TestUtils
 * @returns {function}
 */
module.exports.payments = function payments(TestUtils) {
  return function (incomes, debts) {
    const totalIncome = TestUtils.sumAllObjectProperties.call(incomes);
    const totalDebts = TestUtils.sumAllObjectProperties.call(debts);
    return totalIncome - totalDebts;
  };
};
