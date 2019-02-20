//#region Сделать первый символ заглавным
// Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом
// P.S. В JavaScript нет встроенного метода для этого.
// Создайте функцию, используя toUpperCase() и charAt().
//#endregion

/**
 * возвращает строку `str` с заглавным первым символом
 * @param {string} str получаемая строка
 */
function ucFirst(str) {
    var res = '';
    res = str.charAt(0).toUpperCase() + str.substring(1);
    return res;
};

console.log(ucFirst("вася"));       // "Вася"
console.log(ucFirst(""));        // "" - нет ошибок при пустой строке