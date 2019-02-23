//#region Перевести текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки
// вида «my-short-string» в «myShortString».
// То есть, дефисы удаляются, а все слова после них получают заглавную букву.
// Такая функция полезна при работе с CSS.
// P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
// Например:
//#endregion

camelize("background-color") // 'backgroundColor';
camelize("list-style-image") // 'listStyleImage';
camelize("-webkit-transition") // 'WebkitTransition';