/**
 Решето Эратосфена
 *
 Целое число, большее 1, называется простым, если оно не делится нацело ни на какое другое, кроме себя и 1.

 Древний алгоритм «Решето Эратосфена» для поиска всех простых чисел до n выглядит так:

 Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n.
 Пусть p=2, это первое простое число.
 Зачеркнуть все последующие числа в списке с разницей в p, т.е. 2*p, 3*p, 4*p и т.д. В случае p=2 это будут 4,6,8....
 Поменять значение p на первое не зачеркнутое число после p.
 Повторить шаги 3-4 пока p2 < n.
 Все оставшиеся не зачеркнутыми числа – простые.
 Посмотрите также анимацию алгоритма.

 Реализуйте «Решето Эратосфена» в JavaScript, используя массив.

 Найдите все простые числа до 100 и выведите их сумму.

 https://learn.javascript.ru/array

 */

// ВАРИАНТ 1 ———————————————————-

function Eratos (n){
    var arr = [], newar = [], sumNum = 0;
    for(var p = 2; p < n; p++){
        if(arr.indexOf(p) <= 0){
            if(p*p < n){

                for(var i = 1; i*p < n; i++ ){
                    arr.push(i*p);
                }
            }
            newar.push(p);

        }
    }

    for(var j = 0; j < newar.length; j++){
        sumNum += newar[j];
    }
    console.log(arr,newar,sumNum);
}

Eratos(120);

// ВАРИАНТ 2 ———————————————————- по скорости, значительно дольше.

var arr = [], manycikle = [], newar = [];
function Eratos (n){
    var p = 2;
    for(var i = p; i <= n; i++){
        newar = newar.concat(manycikle);
        if(newar.indexOf(i) < 0){
            if(i*i <= n){
                manycikle = cicle (i, n);
            }
            arr.push(i);
        }
    }
    sumF(arr);
    console.log(arr,sumF(arr));
}

function cicle (start, end){
    console.log(start, end);
    var arto2 = [];
    for (var i = start;  i<= end; i++){
        var res = i*start;
        arto2.push(res);
        //console.log(res);
    }
    return arto2;
}

function sumF(ar){
    var sumNum = 0;
    if(typeof ar == "object"){

        for(var i = 0; i < ar.length; i++){
            sumNum += ar[i];
        }
        return sumNum;
    }

}
Eratos(120);
