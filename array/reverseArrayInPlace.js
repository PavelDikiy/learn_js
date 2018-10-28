/*Нужно сделать реверс массива без метода reverse с мутацией входящего массива (edited)*/


function reverseArrayInPlace(arr){
  var lengthAr = arr.length;
  for(var i = arr.length-1; i >= 0; i-- ){
    arr.push(arr[i]);
  }
  arr.splice(0,lengthAr);
}

var arrayValue = [1, 2, 3, 4, 5];;
console.log(arrayValue);
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
