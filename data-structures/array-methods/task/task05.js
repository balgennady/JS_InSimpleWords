//#region Сортировать в обратном порядке
// Как отсортировать массив чисел в обратном порядке?
//#endregion

var arr = [5, 2, 1, -10, 8];

function s(a, b) {
    return (a > b) ? -1 : 1;
}

arr.sort(s);

console.log( arr ); // 8, 5, 2, 1, -10