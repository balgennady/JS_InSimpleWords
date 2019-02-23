//#region Добавить класс в строку
// В объекте есть свойство className, которое
// содержит список «классов» – слов, разделенных пробелом:
// Создайте функцию addClass(obj, cls), которая добавляет
// в список класс cls, но только если его там еще нет:
// P.S. Ваша функция не должна добавлять лишних пробелов.
//#endregion

var obj = {
  className: 'open menu'
}


addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"