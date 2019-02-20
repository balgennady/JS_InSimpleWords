//#region Относительное форматирование даты
// Напишите функцию `formatDate(date)`, которая форматирует дату `date` так:
// - Если со времени `date` прошло менее секунды, то возвращает `"только что"`.
// - Иначе если со времени `date` прошло менее минуты, то `"n сек. назад"`.
// - Иначе если прошло меньше часа, то `"m мин. назад"`.
// - Иначе полная дата в формате `"дд.мм.гг чч:мм"`.
//#endregion

/**
 * форматирует дату `date`
 * @param {Date} date исходаная дата
 */
function formatDate(date) {

    var res = '';

    const now = new Date();
    var diff = now - date;

    if (diff < 1000) { // Если прошло менее секунды
        return "только что"
    }
    else if (diff < (60 * 1000)) { // если прошло менее минуты
        return (diff / 1000) + " сек. назад"
    }
    else if (diff < (60 * 60 * 1000)) { // если прошло меньше часа
        return (diff / 10000 / 6  ) + ' мин. назад'
    } else {
        var dd = date.getDate();
        if (dd < 10)
            dd = '0' + dd;
        var mm = date.getMonth() + 1;
        if (mm < 10)
            mm = '0' + mm;
        var yy = date.getFullYear() % 100;
        if (yy < 10)
            yy = '0' + yy;
        var hh = date.getHours();
        var mn = date.getMinutes();


        res = dd + '.' + mm + '.' + yy + ' ' + hh + ':' + mn;
        return res;
    }

}

// console.log(formatDate(new Date(new Date - 1))); // "только что"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"