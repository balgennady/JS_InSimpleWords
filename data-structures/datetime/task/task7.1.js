//#region Сколько секунд - до завтра?
// Напишите функцию `getSecondsToTomorrow()` которая
// возвращает, сколько секунд осталось до завтра.
// Например, если сейчас `23:00`, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть
// конкретного значения сегодняшней даты.
//#endregion

/**
 * возвращает, сколько секунд осталось до завтра
 */
function getSecondsToTomorrow() {
    var seconds;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todaySec = Math.floor((now - today) / 1000);
    const secondsToHours = 24 * 60 * 60;
    seconds = secondsToHours - todaySec;
    return seconds;
}

// Для получения оставшихся до конца дня миллисекунд нужно
// из «завтра 00 ч 00 мин 00 сек» вычесть текущее время.
// Чтобы сгенерировать «завтра» – увеличим текущую дату на 1 день:

/**
 * возвращает, сколько секунд осталось до завтра
 */
function getSecondsToTomorrow2() {
    var now = new Date();

    // создать объект из завтрашней даты, без часов-минут-секунд
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // перевести в секунды
}

console.log(getSecondsToTomorrow());
console.log(getSecondsToTomorrow2());
