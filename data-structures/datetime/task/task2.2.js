//#region Имя дня недели
// Создайте функцию `getWeekDay(date)`,
// которая выводит текущий день недели в коротком формате 'пн', 'вт',  ... 'вс'.
//#endregion

var date = new Date(2012,0,3);  // 3 января 2012

/**
 * выводит текущий день недели в коротком формате 'пн', 'вт',  ...
 * @param {number} date исходная дата
 */
function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    var day = date.getDay();
    return days[day];
}

console.log( getWeekDay(date) );      // Должно вывести 'вт'
