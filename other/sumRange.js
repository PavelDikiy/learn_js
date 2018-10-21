/*Напишите функцию range, принимающую два аргумента – начало и конец диапазона – и возвращающую массив, который содержит все числа из него, включая начальное и конечное.

Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива.
Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
*/

//----------------------------------------------------

function range(start, end, step){
  let newAr = [];
  let stepRange = 1;

  if(step != undefined)stepRange = step;


  if(stepRange > 0){
    for(let i = start; i <= end; i += stepRange){
      newAr.push(i);
    }
  }
  else{
    for(let i = start; i >= end; i += stepRange){
      newAr.push(i);
    }
  }

  return newAr;

}

function sum(arr){
  // Варинт 1
  /*let result = 0;
  for(let i = 0; i < arr.length; i ++){
    result += arr[i];
  }
  return result;*/
  // Варинт 2
  return arr.reduce(function(sum,currentVal){return sum+currentVal;});

}

sum(range(1, 10));
