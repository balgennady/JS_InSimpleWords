//#region Проверьте спам
// Напишите функцию checkSpam(str), которая возвращает true,
// если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру:
//#endregion

/**
 * возвращает результат проверки строки на содержание слов,
 * функция нечувствительна к регистру
 * @param {string} str строка для проверки
 */
function checkSpam(str) {

    const lowerStr = str.toLowerCase();
    return !!( ~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx') );

}

console.log(checkSpam('buy ViAgRA now') );  // true
console.log(checkSpam('free xxxxx'));       // true
console.log(checkSpam("innocent rabbit"));  // false