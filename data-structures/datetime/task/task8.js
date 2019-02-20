//#region Вывести дату в формате дд.мм.гг
// Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг
// P.S. Обратите внимание, ведущие нули должны присутствовать,
// то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
//#endregion

/**
 * которая выводит дату `date` в формате дд.мм.гг
 * @param {date} date исходная дата
 */
function formatDate(date) {
    var options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    };
    var inDate = new Date(date);
    var formatter = new Intl.DateTimeFormat("ru");

    // console.log(inDate.toLocaleString('ru', options));
    console.log(formatter.format(inDate));
}

formatDate(new Date(2014, 0, 30));
