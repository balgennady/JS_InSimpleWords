//#region Случайное целое от min до max
// Напишите функцию randomInteger(min, max) для генерации
// случайного целого числа между min и max, включая min,max
// как возможные значения.
// Любое число из интервала min..max должно иметь одинаковую вероятность.
//#endregion

/**
 * генерации случайного числа от min до max, не включая max
 * @param {number} min минимальное для случайного
 * @param {number} max максимальное для случайного
 */
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

for (var i = 0; i < 10; i++) {
    console.log(randomInteger(2, 5));
}