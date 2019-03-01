//#region Сортировка объектов
// Напишите код, который отсортирует массив объектов people по полю age.
// Выведите список имён в массиве после сортировки.
//#endregion

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

// function ageSort(a, b) {
//     return (a.age > b.age) ? 1 : -1;
// }

// people.sort(ageSort);

people.sort((a, b) => {
    return (a.age > b.age) ? 1 : -1;
});

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6