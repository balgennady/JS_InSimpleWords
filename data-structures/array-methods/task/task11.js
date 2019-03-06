//#region Оставить уникальные элементы массива
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив,
// содержащий только уникальные элементы arr.
//#endregion

function unique(arr) {

	var delarr = [];

	for (let firstStr = 0; firstStr < arr.length - 1; firstStr++) {

		// console.log("firstStr: " + arr[firstStr]);
		var str1 = arr[firstStr];

		for (var secondStr = firstStr + 1; secondStr < arr.length; secondStr++) {

			// console.log("secondStr: " + arr[secondStr]);
			var str2 = arr[secondStr];

			if (str1 == str2) {
				// console.log( arr[firstStr] + " = " + arr[secondStr])
				delarr.push(arr.splice(secondStr, 1));
				secondStr--;
			}
		}

	}
	return arr;
}

var strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings)); // кришна, харе, 8-()