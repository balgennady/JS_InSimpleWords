//#region условие
// Целое число, большее 1, называется простым, если оно не делится
// нацело ни на какое другое,
// кроме себя и 1.
// Древний алгоритм «Решето Эратосфена» для поиска всех простых
// чисел до n выглядит так:
//  Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
//  Пусть p=2, это первое простое число.
//  Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д.
//  В случае p=2 это будут 4,6,8....
//  Поменять значение p на первое не зачеркнутое число после p.
//  Повторить шаги 3-4 пока p2 < n.
//  Все оставшиеся не зачеркнутыми числа – простые.
//
// Реализуйте «Решето Эратосфена» в JavaScript, используя массив.
// Найдите все простые числа до 100 и выведите их сумму.
//#endregion



// Эратосфен алгоритм для находения всех простых до n
function erat(n) {
   var arr = [];

   for (var i = 2; i <= n; i++) {
      for (var j = 2; j < i; j++) {
         if (i % j == 0) {
            break;
         } else {
            arr.push(i);
            break;
         }
      }
   }
}

function separator(n) {

   var array = [], upperLimit = Math.sqrt(n), output = [];

   // Создаем массиы от 2 до (n - 1)
   for (var i = 0; i < n; i++) {
      array.push(true);
   }

   // Remove multiples of primes starting from 2, 3, 5,...
   // отмечаем числа путем умнажение простого
   for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
         for (var j = i * i; j < n; j += i) {
            array[j] = false;
         }
      }
   }

   // Все array[i] мееюыие true есть постые
   for (var i = 2; i < n; i++) {
      if (array[i]) {
         output.push(i);
      }
   }

   return output;
};

var data = 100;
// console.log(separator(data).join(', '));

console.log('TCL: data ', erat(data));