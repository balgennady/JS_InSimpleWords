//#region Скопировать и отсортировать массив
// Есть массив строк arr. Создайте массив arrSorted
// – из тех же элементов, но отсортированный.
// Исходный массив не должен меняться.
// Постарайтесь сделать код как можно короче.
//#endregion

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = [];

for (var i = 0; i < arr.length; i++) {
    arrSorted.push(arr[i]);
}

// var arrSorted = arr.slice().sort();

arrSorted.sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)