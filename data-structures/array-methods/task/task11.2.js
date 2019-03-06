//#region Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.
//#endregion

function unique(arr) {

	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		// console.log(k);
		obj[arr[i]] = 0;
	}

	var uni = Object.keys(obj);

	return uni;
}

var strings = [
	"кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings)); // кришна, харе, 8-()