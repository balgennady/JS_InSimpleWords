//#region Проверьте спам
// Напишите функцию checkSpam(str), которая возвращает true,
// если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру:
//#endregion

/**
 * возвращает результат проверки строки на содерзание слов,
 * функция нечувствительна к регистру
 * @param {string} str строка для проверки
 */
function checkSpam(str) {
    var check = true;
    const
        str1 = 'viagra',
        str2 = 'XXX';

    if (
        (str.toLowerCase().indexOf(str1.toLowerCase()) == -1) &&
        (str.toLowerCase().indexOf(str2.toLowerCase()) == -1))
            return false;

    return check;
}

console.log(checkSpam('buy ViAgRA now') );  // true
console.log(checkSpam('free xxxxx'));       // true
console.log(checkSpam("innocent rabbit"));  // false