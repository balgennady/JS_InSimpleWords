//#region Случайное из интервала (0, max)
// Напишите код для генерации случайного значения
// в диапазоне от 0 до max, не включая max.
//#endregion

/**
 * генераци случайного значения в диапазонея от 0 до max, не включая max.
 * @param {number} max максимальное число для диапозона случайных чисел
 */
function getRantd(max) {
    var res;
    res = Math.random() * max;
    return res;
}
