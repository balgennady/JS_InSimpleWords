//#region Последний день месяца?
// Напишите функцию `getLastDayOfMonth(year, month)`,
// которая возвращает последний день месяца.
//#endregion

/**
 *  возвращает последний день месяца
 * @param {number} year 4-значный год, например 2012
 * @param {number} month месяц от 0 до 11
 */
function getLastDayOfMonth(year, month){

    var date = new Date(year, month + 1, 0);
    var day = date.getDate();

    return day;
}

console.log(getLastDayOfMonth(2019, 1));
