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
	var res = '';

	const inDate = new Date(date);

	var year = inDate.getFullYear();
	year = year.toString().slice(2,4);

	var month = (inDate.getMonth() + 1).toString();
	if (month.length < 2)
		month = '0' + month;

	var day = inDate.getDate().toString();
	if (day.length < 2)
		day = '0' + day;

	res = day + '.' + month + '.' + year;

	return res;
}

console.log(formatDate(new Date(2000, 0, 1)));
