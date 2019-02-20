//#region Сколько секунд уже прошло сегодня?
// Напишите функцию `getSecondsToday()` которая возвращает,
// сколько секунд прошло с начала сегодняшнего дня.
// Например, если сейчас `10:00` и не было перехода на зимнее/летнее время, то:
// Функция должна работать в любой день, т.е. в ней не должно
// быть конкретного значения сегодняшней даты.
//#endregion


/**
 * возвращает сколько секунд прошло с начала сегодняшнего дня
 */
function getSecondsToday2() {
    var now = new Date();
    // создать объект из текущей даты, без часов-минут-секунд
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var diff = now - today; // разница в миллисекундах
    return Math.floor(diff / 1000); // перевести в секунды
}
/**
 * возвращает сколько секунд прошло с начала сегодняшнего дня
 */
function getSecondsToday3() {
    var d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday2())
console.log(getSecondsToday3())
