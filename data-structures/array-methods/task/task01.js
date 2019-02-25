//#region Добавить класс в строку
// В объекте есть свойство className, которое
// содержит список «классов» – слов, разделенных пробелом:
// Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
// P.S. Ваша функция не должна добавлять лишних пробелов.
//#endregion

var obj = {
	className: 'open menu'
}

/**
 * добавляет в список класс cls, но только если его там еще нет
 * @param {obj} obj объект для проверки
 * @param {string} cls строка для добавления
 */
function addClass(obj, cls) {

	var classes = obj.className ? obj.className.split(' ') : []

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) return; // класс уже есть
	}

	classes.push(cls); // добавить

	obj.className = classes.join(' '); // и обновить свойство

}

addClass(obj, 'new'); // obj.className='open menu new
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj.className); // "open menu new me"