//#region Перепишите цикл через map
// Код ниже получает из массива строк новый массив, содержащий их длины:
// Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
//#endregion

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

arrLength = arr.map(function(item, i , arr) {
  return item.length;
})

console.log( arrLength ); // 4,5,2,5