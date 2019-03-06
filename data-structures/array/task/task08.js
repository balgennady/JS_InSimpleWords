// Создайте функцию filterRange(arr, a, b),
// которая принимает массив чисел arr и возвращает новый массив,
// который содержит только числа из arr из диапазона от a до b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.

var mas = [];


function filterRange(arr, a, b) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= b && arr[i] >= a) mas.push(arr[i]);
  }
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
// теперь filtered = [5, 4, 3]
// arr не изменился
console.log('TCL: arr -> ', arr)
console.log('TCL: mas -> ', mas)
