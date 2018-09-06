/**
 Подмассив наибольшей суммы
 *
 На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

 Задача – найти непрерывный подмассив arr, сумма элементов которого максимальна.

 Ваша функция должна возвращать только эту сумму.

 Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю.

 https://learn.javascript.ru/array

 */


arr = [-1, -2, -3];
/*[2, -1, 2, 3, -9]*/
/*[-1, 2, 3, -9, 11]*/
/*[-2, -1, 1, 2]*/
/*[100, -9, 2, -3, 5]*/

function getMaxSubSum(arrayo){
    var result = 0;
    var prev = 0;
    var maxx = 0
    for(i=0; i < arrayo.length; i++){
        prev = result;
        result = result + arrayo[i]
        if(result <= 0){result = 0;}else{}
        if( prev < result)prev = result;
        if(maxx < arrayo[i])maxx = arrayo[i];
        if( prev < maxx)prev = maxx;
    }
    console.log(result,prev,maxx);
    return prev;
}

getMaxSubSum(arr)