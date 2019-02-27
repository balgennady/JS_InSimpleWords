//#region Случайный порядок в массиве
// Используйте функцию sort для того,
// чтобы «перетрясти» элементы массива в случайном порядке.
//#endregion

var arr = [1, 2, 3, 4, 5];

function rndSort(a, b) {
    // min + Math.floor( Math.random() * (max + 1 - min) )
    return -1 + Math.floor(Math.random() * (1 + 1 + 1));
}

arr.sort(rndSort);
console.log(arr);
