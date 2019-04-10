/*
Свёртка
Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив,
 у которого есть все элементы входных массивов.
 
 var arrays = [[1, 2, 3], [4, 5], [6]];
// Ваш код тут
// → [1, 2, 3, 4, 5, 6]
*/


// Вариант 1 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];

var newAr = [];
function coagulation(arr){
  for (var i=0 ; i < arr.length; i++){
    if(typeof arr[i] != 'object'){
      newAr.push(arr[i]);
    }else{
      coagulation(arr[i]);
    }
  }
return newAr;
}

coagulation(arrays);

// Вариант 2 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  var newAr = [];
  for (var i=0 ; i < arr.length; i++){
    for (var j=0 ; j < arr[i].length; j++){
      newAr.push(arr[i][j]);
    }
  }
  return newAr;
}

coagulation(arrays);

// Вариант 3 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  var str = arr.toString();
  var arr = str.split(',');

  return arr.map((item)=>{
  return +item;
  })
}

coagulation(arrays);

// Вариант 41 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  var newAr = [];
  for (var i=0 ; i < arr.length; i++){
    newAr = newAr.concat(arr[i]);
  }
  return newAr;
}
coagulation(arrays);

// Вариант 5 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  return arr.reduce(function(res,cur) {
    return res.concat(cur);
  });
}
coagulation(arrays);

// Вариант 6 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];

function coagulation(arr){
  let newAr = [];
  arr.forEach(item => {
     newAr=[...newAr, ...item];
  });
  return newAr;
}
coagulation(arrays);

// Вариант 7 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  let newAr = [];
  for(let i = 0; i < arr.length; i++){
    newAr=[...newAr, ...arr[i]];
  };
  return newAr;
}

coagulation(arrays);

// Вариант 8 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];
function coagulation(arr){
  let arrString = arr.join().split(',');
  return arrString.map((item)=>{return +item});
}

coagulation(arrays);

// Вариант 9 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];

function coagulation(arr){
  let newAr = [];
  for(item of arr){
    newAr.push(...item);
  }
  return newAr;
}

coagulation(arrays);

// Вариант 10 -----------------------------------------------------------
var arrays = [[1, 2, 3], [4, 5], [6]];


function coagulation(arr, newAr=[]){
  arr.forEach((item)=>{
    if(item[0]){
    coagulation(item, newAr);
    }else{
    newAr.push(item);
    }
  });
  return newAr;
}

coagulation(arrays);
