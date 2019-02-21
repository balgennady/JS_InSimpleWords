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
function min_max_random(min, max) {
    var min, max, result;
    result = Math.random() * (max - min) + min  ;
    return result;
}
