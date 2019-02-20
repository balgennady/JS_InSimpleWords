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
    /* ваш код */
}

console.log( formatDate(new Date(new Date - 1)) ); // "только что"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"