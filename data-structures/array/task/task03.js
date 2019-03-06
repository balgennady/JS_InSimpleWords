// 1. Создайте массив styles с элементами «Джаз», «Блюз».

var style = ['Джаз', 'Блюз'];

// 2. Добавьте в конец значение «Рок-н-Ролл»

style.push('Рок-н-Ролл');
console.log(style);

// 3. Замените предпоследнее значение с конца на «Классика».
// Код замены предпоследнего значения должен работать для массивов любой длины.

style[style.length - 2] = "Классика";
console.log('TCL: style', style)

// 4. Удалите первое значение массива и выведите его alert.

console.log('TCL: style.shift',  style.shift());
console.log('TCL: style', style)

// 5. Добавьте в начало значения «Рэп» и «Регги».

style.unshift("Рэп", "Регги");
console.log('TCL: style', style);
