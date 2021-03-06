//#region Массив частичных сумм
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.
//#endregion

arr = [ 1, 2, 3, 4, 5 ]
// arr = [ ]
function getSums(arr) {
    var arrsum = [];

    if (arr.length < 1)
        return arrsum;
    else {
        var last = arr.reduce(function (sum, current) {
            arrsum.push(sum);
            return sum + current;
        })
        arrsum.push(last);
        return arrsum;
    }
}


console.log(getSums([-2,-1,0,1]));
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// getSums([-2,-1,0,1]) = [-2,-3,-3,-2]