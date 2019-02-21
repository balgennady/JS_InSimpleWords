
/**
 * ф-ция тестирует ф-ции случмйного чила в диапозоне
 * @param {var} count колисичество запуска теста
 * @param {int} max максимальное для ф-ции случайного
 */
function testRandome(count, max) {
    for (var i = 0; i < count; i++) {
        console.log('TCL: getRantd -> max', getRantd(max));
    }
};

function testRandome(count, min,  max) {
    for (var i = 0; i < count; i++) {
        console.log('TCL: min_max_random -> res', min_max_random(min, max));
    }
};

