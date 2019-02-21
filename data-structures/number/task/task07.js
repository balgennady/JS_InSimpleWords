//#region Случайное из интервала (min, max)
// Напишите код для генерации случайного числа
// от min до max, не включая max.
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

