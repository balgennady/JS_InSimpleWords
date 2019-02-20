//#region День указанное количество дней назад
// Создайте функцию `getDateAgo(date, days)`,
// которая возвращает число, которое было `days` дней назад от даты `date`.
// P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект `date`.
//#endregion

// Например, для 2 января 2015:
var date = new Date(2015, 0, 2);

/**
 * возвращает число, которое было `days` дней назад от даты `date`
 * @param {date} date исходная дата
 * @param {number} days количкство дней
 */
function getDateAgo(date, days) {

    var dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);

    return dateCopy.getDate();
}

console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)