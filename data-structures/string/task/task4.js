//#region Выделить число
// Есть стоимость в виде строки: "$120".
// То есть, первым идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str),
// которая будет из такой строки выделять число-значение, в данном случае 120.
//#endregion

/**
 * выделяет число-значение из строки
 * @param {string} str исходная строка
 */
function extractCurrencyValue(str) {
    var val = 0;
    val = +str.slice(1);
    return val;
}