// На входе массив чисел, например:

arr = [1, -2, 3, 4, -9, 6]

// Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.
// Ваша функция должна возвращать только эту сумму.
// Если все элементы отрицательные, то не берём ни
// одного элемента и считаем сумму равной нулю:


/**
 * фу-я для находжения суммы диапозона с задоного индекса
 * до индекса полученного с помощью длины диапозона
 * @param {var} arr обработываемый массив
 * @param {var} starIndex начальный индекс для суммы
 * @param {var} size  размер диапозона
 */
function sumRange(arr, starIndex, size) {

    var rez = 0;
    var i = starIndex;

    while (size > 0) {
        rez += arr[i];
        i++;
        size--;
    }

    return rez;
}


function getMaxSubSum(arr) {

    var max = 0;
    var minSizeRange = 1;
    var maxSizeRange = arr.length - minSizeRange + 1;
    var sizeRange = minSizeRange;
    var stopIndex = arr.length - sizeRange;
    var check = true;
    var negative = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) negative++;
    }

    if (negative == arr.length) check = false;

    while (check) {
        for (sizeRange; sizeRange <= maxSizeRange; sizeRange++) {
            for (var starIndex = 0; starIndex <= stopIndex; starIndex++) {
                var tempSum = sumRange(arr, starIndex, sizeRange)
                if (tempSum > max)
                    max = tempSum;
            }
        }
        check = false;
    }
    // console.log('TCL: getMaxSubSum -> max', max)
};

getMaxSubSum([-1, 2, 3, -9]);       //= 5   (ok)
getMaxSubSum([2, -1, 2, 3, -9])     //= 6   (ok)
getMaxSubSum([-1, 2, 3, -9, 11])    //= 11  (ok)
getMaxSubSum([-2, -1, 1, 2])        //= 3   (ok)
getMaxSubSum([100, -9, 2, -3, 5])   //= 100 (ok)
getMaxSubSum([1, 2, 3])             //= 6   (ok)
getMaxSubSum([-1, -2, -3])          //= 0   (ok)