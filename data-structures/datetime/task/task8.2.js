//#region Вывести дату в формате дд.мм.гг
// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг
// P.S. Обратите внимание, ведущие нули должны присутствовать,
// то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
//#endregion

/**
 * которая выводит дату `date` в формате дд.мм.гг
 * @param {Date} date исходная дата
 */
function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

console.log(formatDate(new Date(2000, 0, 1)));
