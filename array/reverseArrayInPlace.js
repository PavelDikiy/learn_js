/*Нужно сделать реверс массива без метода reverse с мутацией входящего массива (edited)*/
function reverseArrayInPlace(arr){

for(var i = 0; i < arr.length; i++ ){
delete arr[i];
arr[i] = arr.length-i;
}


}

var arrayValue = [1, 2, 3, 4, 5];
console.log(arrayValue);
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
