//#region День недели в европейской нумерации
// Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
// День нужно возвратить в европейской нумерации,
// т.е. понедельник имеет номер 1, вторник номер 2, ..., воскресенье - номер 7.
//#endregion

// var date = new Date(2012, 0, 3);  // 3 янв 2012

/**
 * возвращает день недели для даты date
 * @param {number} date исходная дата
 */
function getLocalDay(date) {

    var day = date.getDay();

    if (day == 0) { // день 0 становится 7
        day = 7;
    }

    return day;
}

// console.log( getLocalDay(date) );       // вторник, выведет 2
console.log(getLocalDay(new Date(2014, 0, 5)))