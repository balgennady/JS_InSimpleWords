//#region Относительное форматирование даты
// Напишите функцию `formatDate(date)`, которая форматирует дату `date` так:
// - Если со времени `date` прошло менее секунды, то возвращает `"только что"`.
// - Иначе если со времени `date` прошло менее минуты, то `"n сек. назад"`.
// - Иначе если прошло меньше часа, то `"m мин. назад"`.
// - Иначе полная дата в формате `"дд.мм.гг чч:мм"`.
//#endregion

/**
 * форматирует дату `date`
 * @param {date} date исходаная дата
 */
function formatDate(date) {
	var diff = new Date() - date; // разница в миллисекундах

	if (diff < 1000) { // прошло менее 1 секунды
		return 'только что';
	}

	var sec = Math.floor(diff / 1000); // округлить diff до секунд

	if (sec < 60) {
		return sec + ' сек. назад';
	}

	var min = Math.floor(diff / 60000); // округлить diff до минут
	if (min < 60) {
		return min + ' мин. назад';
	}

	// форматировать дату, с учетом того, что месяцы начинаются с 0
	var d = date;
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	];

	for (var i = 0; i < d.length; i++) {
		d[i] = d[i].slice(-2);
	}

	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1))); // "только что"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"