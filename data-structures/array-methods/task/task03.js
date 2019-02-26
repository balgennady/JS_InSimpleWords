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

// var obj = {
// 	className: 'open menu'
// }

function  removeClass(obj, cls) {
	var arr = obj.className.split(' ');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == cls) {
			arr.splice(i, 1);
			i--;
		}
	}
	obj.className = arr.join(' ');
}

removeClass(obj, 'menu');
console.log( obj.className ); // 'my'
// removeClass(obj, 'open');
// console.log(obj.className); // obj.className='menu'
// removeClass(obj, 'blabla'); // без изменений (нет такого класса)
// console.log(obj.className); // obj.className='menu'