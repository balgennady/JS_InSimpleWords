//#region Перевести текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».
// ?т.е. дефисы удаляются, а все слова после них получают заглавную букву.
// Такая функция полезна при работе с CSS.
// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
// Например:
//#endregion

function camelize(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

console.log(camelize("bAckground-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); //  WebkitTransition