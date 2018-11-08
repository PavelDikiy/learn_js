Сумма через замыкание

Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
Да, именно так, через двойные скобки (это не опечатка).

function sum(a){

return function (b){
	return a+b;
}

}

/*--------------------------------------------------------------*/
Функция - строковый буфер

В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения.
Его функционал состоит из двух возможностей:

Добавить значение в буфер.
Получить текущее содержимое.
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

Создание объекта: var buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище,
 а при вызове без аргументов buffer() – возвращает его.
Буфер должен преобразовывать все данные к строковому типу.
Решение не должно использовать глобальные переменные.

function makeBuffer() { 

var stringi = "";

return function(a){
	return (arguments.length > 0) ? stringi+=arguments[0] : stringi;
}


}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!



/*--------------------------------------------------------------*/
Строковый буфер с очисткой

Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера

function makeBuffer() { 

var stringi = "";

function buffer(){
	return (arguments.length > 0) ? stringi+=arguments[0] : stringi;
}

buffer.clear = function(){
	stringi = "";
}

return buffer;

}

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); //



/*--------------------------------------------------------------*/
Сортировка

У нас есть массив объектов:
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

Вместо того, чтобы каждый раз писать в sort function... – будем использовать byField(...)

Напишите функцию byField(field), которую можно использовать в sort для сравнения объектов по полю field, чтобы пример заработал.

/*ВАР1---------------------*/
function byField(argm){
	return function(a,b){
		switch(argm){
			case "name":
				return a.name > b.name ? 1 : -1;
			break

			case "age":
				return a.age > b.age ? 1 : -1;
			break
		}
		
	}

}


/*ВАР2---------------------*/
function byField(argm){
var ObjUsers = Object.keys(users[0]);
	return function(a,b){

		for (var key in users[0]) {

			if(argm == key){
				return a[key] > b[key] ? 1 : -1;
			}
		}
		
	}

}

users.sort(byField('name'));
users.forEach(function(user) {
  alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  alert( user.name );
}); // Маша, Вася, Петя

/*--------------------------------------------------------------*/
Фильтрация через функцию

Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый,
 в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". 
Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.


/*Вариант который я начал делать и не закончил, так как понял, что иду не в том направлении*/
function filter(arr, method){
var arrayNew = arr.slice();
var nAr = [];

function inArray(param){
var nAr = [];
if (typeof param == "number"){
var param1 = param;
param = [param1];
}
  for (var i = 0; i < param.length; i++){
      for (var j = 0; j < arrayNew.length; j++){
        if(param[i]==arr[j]){
          nAr.push(arr[j]);
          break
        }
        }
    }
return nAr;
}

function inBetween(start, end){
  for (var i = 0; i < arrayNew.length; i++){
	  if(arrayNew[i] >= start && arrayNew[i] <= end){
		  nAr.push(arrayNew[i]);
	  }
    }
return nAr;
}


if(typeof method == "function"){
    for (var j = 0; j < arrayNew.length; j++){
if(method(arrayNew[j])){
        nAr.push(arrayNew[j]);
}
    }
return nAr;
}
return method;

}

/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2


/*Правильный вариант*/
function filter(arr, faunc){
//---------------вариант 1
	//return arr.filter(faunc);
//---------------вариант 2
var nAr =[];
    for (var j = 0; j < arr.length; j++){
        if(faunc(arr[j])){
                nAr.push(arr[j]);
        }
    }
return nAr;
//------------------------
}

function inArray(arr){
return function(x){
	return arr.indexOf(x) != -1;
}
}

function inBetween(start, end){
	return function(x){
		return x >= start && x <= end;
	}
}
var arr = [1, 2, 3, 4, 5, 6, 7];
alert(filter(arr, function(a) {
  return a % 2 == 0
}));
alert( filter(arr, inArray([1, 2, 10])) );
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6


/*--------------------------------------------------------------*/
Армия функций

Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер.
Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.


//---------------вариант 1
function makeArmy() {

  var shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function() { 
      alert( i ); 
    };
    shooters.push(shooter);
  }

  return shooters;
}
//---------------вариант 2
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    function newScope(i) {
     var shooter = function() { 
                  alert( i );
        };
		return shooter;
	}
   
    shooters.push(newScope(i));
  }

  return shooters;
}

//---------------вариант 3
    function makeArmy() {
    
      var shooters = [];
    
      for (var i = 0; i < 10; i++) {
        var shooter = (function(x) { // функция-стрелок
        return function(){
          alert(x); // выводит свой номер
        }})(i);
        shooters.push(shooter);
      }
    
      return shooters;
    }
	
//----------------------------
var army = makeArmy();

army
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
