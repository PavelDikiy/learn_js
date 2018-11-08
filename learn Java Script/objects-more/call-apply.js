/*
Задача №1
Перепишите суммирование аргументов


Создайте функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
 
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.

*/

/*Вариант 1*/
function sumArgs() {
	//мой код
	arguments.slice = [].slice;
	var newAr = arguments.slice();
	return newAr.reduce(function(sum,cur){
		return sum+cur;
	});
  

  	// А МОЖНО БЫЛО СДЕЛАТЬ И ТАК
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });

}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

/*Вариант 2*/
function sumArgs() {
		//мой код
	var slice = [].slice;
	var newAr = slice.call(arguments);
	return newAr.reduce(function(sum,cur){
		return sum+cur;
	});
	
	
	  	// А МОЖНО БЫЛО СДЕЛАТЬ И ТАК
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

/*Вариант 3*/
function sumArgs() {
	
	var slice = [].slice;
	var newAr = slice.apply(arguments);
	return newAr.reduce(function(sum,cur){
		return sum+cur;
	});
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

//---------------------------------------------------------


/*
Задача №2
Примените функцию к аргументам

Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями
*/

function applyAll(){

	var newAr = [].slice.call(arguments);
	var func = newAr.shift();
	return func.apply(this,newAr);
}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}


alert( applyAll(Math.max, 2, -2, 3) ); // 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2
alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
