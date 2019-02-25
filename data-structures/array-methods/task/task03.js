//#region Функция removeClass
// У объекта есть свойство className, которое хранит
//  список «классов» – слов, разделенных пробелами:
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
// P.S. Дополнительное усложнение.
// Функция должна корректно обрабатывать дублирование класса в строке:
// Лишних пробелов после функции образовываться не должно.
//#endregion

obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');
console.log( obj.className ); // 'my'

var obj = {
  className: 'open menu'
};
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)