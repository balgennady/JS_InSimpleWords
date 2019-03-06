// Напишите код для вывода alert случайного значения из массива:

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var min, max;

min = 0;
max = arr.length - 1;

// P.S. Код для генерации случайного целого от min to max включительно:

var rand = min + Math.floor(Math.random() * (max + 1 - min));

console.log('arr[rand] -> ', arr[rand]);
