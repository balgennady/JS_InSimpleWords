//#region Вывести односвязный список
// Односвязный список – это структура данных, которая состоит из элементов,
// каждый из которых хранит ссылку на следующий.
// Последний элемент может не иметь ссылки, либо она равна null.
// Например, объект ниже задаёт односвязный список, в next хранится
// Задачи:
// Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
// Напишите функцию printList(list) при помощи рекурсии.
// Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
// Как лучше – с рекурсией или без?
//#endregion

var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

// Альтернативный способ создания:
var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printListLoop(list) {
    while (list != null) {
        console.log(list.value);
        list = list.next;
    }
}

function printListRec (list) {
    if (list.next) {
        printListRec(list.next);
	}
	console.log(list.value);
}

printListLoop(list);
console.log('=================================');
printListRec(list);