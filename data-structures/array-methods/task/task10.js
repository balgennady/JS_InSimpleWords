//#region Отфильтровать анаграммы
// Анаграммы – слова, состоящие из одинакового количества одинаковых букв,
// но в разном порядке. Например:
// воз - зов
// киборг - гробик
// корсет - костер - сектор
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
//#endregion

function aclean(arr) {

    var delarr = [];

    for (let firstStr = 0; firstStr < arr.length - 1; firstStr++) {

        // console.log("firstStr: " + arr[firstStr]);
        var str1 = arr[firstStr].toLowerCase().split('').sort().join("");

        for (var secondStr = firstStr + 1; secondStr < arr.length; secondStr++) {

            // console.log("secondStr: " + arr[secondStr]);
            var str2 = arr[secondStr].toLowerCase().split('').sort().join("");

            if (str1 == str2) {
                // console.log( arr[firstStr] + " = " + arr[secondStr])
                delarr.push(arr.splice(secondStr, 1));
                secondStr--;
            }
        }

    }
    return arr;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));
 // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
