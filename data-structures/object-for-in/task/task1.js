//#region Определите, пуст ли объект
// Создайте функцию isEmpty(obj), которая возвращает true,
// если в объекте нет свойств и false – если хоть одно свойство есть.
//#endregion

function isEmpty(obj) {

    var counter = 0;

    for (var key in obj) {
        counter++;
    }

    if (counter > 0)
        return false;
    else return true;

}

var schedule = {};

console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
console.log( isEmpty(schedule) ); // false
