// Создайте функцию multiplyNumeric,
// которая получает объект и умножает
// все численные свойства на 2. Например:
// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(input) {

    for (var key in input) {
        if (Number.isInteger(input[key])) {
            input[key] = input[key] * 2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);

// после вызова
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };
