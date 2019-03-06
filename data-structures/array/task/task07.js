// Создайте функцию ,
// которая ищет в массиве arr значение value и возвращает его номер,
// если найдено, или -1, если не найдено.

function find(arr, value) {
  for (var i = 0 ; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

arr = ["test", 2, 1.5, false];

// find(arr, "test"); // 0
console.log('TCL: find(arr, "test");', find(arr, "test"));
// find(arr, 2); // 1
console.log('TCL: find(arr, 2)', find(arr, 2));
// find(arr, 1.5); // 2
console.log('TCL: find(arr, 1.5)', find(arr, 1.5));
// find(arr, 0); // -1
console.log('TCL: find(arr, 0)', find(arr, 0));
