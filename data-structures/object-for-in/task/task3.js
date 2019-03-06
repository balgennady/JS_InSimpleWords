// Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника,
// у которого самая большая зарплата.
// Если объект пустой, то пусть он выводит «нет сотрудников».
// Например:

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};


var worker = "",
    max = 0;
for (var key in salaries) {
    if (salaries[key] > max) {
        max+= salaries[key];
        worker = key;
    }
}
console.log(worker || "нет соотрудников");
