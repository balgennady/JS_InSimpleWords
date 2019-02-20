//#region Проверьте спам
// Напишите функцию checkSpam(str), которая возвращает true,
// если строка str содержит „viagra“ или „XXX“, а иначе false.
// Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
//#endregion