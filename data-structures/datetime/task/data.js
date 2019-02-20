var now = new Date();
console.log("текущая дата: " +  now );

var Jan02_1970 = new Date(3600 * 24 * 1000);
console.log(
    "количество миллисекунд (1/1000 секунды),\n" +
    "прошедших с 1 января 1970 года: " +
    Jan02_1970
);

console.log("Часов в Лондоне: " + now.getUTCHours());
console.log("Часов сейчас: " + now.getHours());
console.log("Минут сечас: " + now.getMinutes());
console.log("разницу между местным и UTC-временем, в минутах:", new Date().getTimezoneOffset());