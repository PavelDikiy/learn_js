/*
Числа от 1 до 100 лежат в массиве, они хаотично перемешанные, от туда изъяли одно число, надо найти, что это за число.

Массив я не мешал, но отрабатывает правильно.
*/

var arr100 = [];
for(var j=0; j < 100; j++){
arr100.push(j+1);
}
delete arr100[98];
console.log(arr100);

function numberIsMissing(arr){
let sumOrig= 0;
let sum = 0;

    for(var i = 0; i < arr.length; i++){
		sumOrig+= i+1;
		sum+=arr[i] || 0;
		let result = sumOrig-sum;
		if(result != 0){

			return "Нет числа - "+result;
		}
    }

return "Нет отсутствующих чисел";

};

numberIsMissing(arr100);
