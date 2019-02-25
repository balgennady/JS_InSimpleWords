//#region Перевести текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».
// ?т.е. дефисы удаляются, а все слова после них получают заглавную букву.
// Такая функция полезна при работе с CSS.
// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
// Например:
//#endregion

function camelize(str) {
    var outputStr = '';
    var arr = str.split('') ;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == '-') {
            var bigLetter = arr[index + 1].toUpperCase();
            arr.splice(index, 2, bigLetter);
        }
    }
    outputStr = arr.join('');
    return outputStr;
}

console.log(camelize("bAckground-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); //  WebkitTransition