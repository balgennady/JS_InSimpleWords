//#region Сумма аргументов
// Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
//#endregion

function sum() {
    var res = 0;
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            res += arguments[i];
        }
    }
    return res;
}

console.log(sum()) //= 0
console.log(sum(1))//= 1
console.log(sum(1, 2)) //= 3
console.log(sum(1, 2, 3)) //= 6
console.log(sum(1, 2, 3, 4))//= 10