/*################################################1
Добавить класс в строку
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом.
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет
P.S. Ваша функция не должна добавлять лишних пробелов.*/

/*--------------------------------------Мой вариант*/

function addClass(objC, classC){

var stringAr = objC.className.split(" ");

console.log(stringAr.length);
if(stringAr.length > 1){
for(i=0; i < stringAr.length; i++){
	if(stringAr[i] == classC){
		return;
	}else{
		stringAr.push(classC);
		stringAr = stringAr.join(" ");
		return objC.className = stringAr;
	}
}
}

objC.className+=""+classC;

};
    var obj = {
      className: ' open menu' 
    }
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className)


/*--------------------------------------Мой вариант №2*/

function addClass(objC, classC){

var stringAr = objC.className.split(" ");

console.log(stringAr.length);
if(stringAr.length > 1){
for(i=0; i < stringAr.length; i++){
	if(stringAr[i] == classC){
		return;
	}
}

		stringAr.push(classC);
		objC.classNamer = stringAr.join(" ");
}

objC.className+=" "+classC;

};

    var obj = {
  className: ' open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
obj.className


/*--------------------------------------оригинал*/

function addClass(obj, cls) {
  var classes = obj.className ? obj.className.split(' ') : [];

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) return; // класс уже есть
  }

  classes.push(cls); // добавить

  obj.className = classes.join(' '); // и обновить свойство
}

var obj = {
  className: 'open menu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
alert(obj.className) // open menu new me


/*##################################################2
Перевести текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

/*--------------------------------------Мой вариант*/
function camelize(text){
	var ArrayText = text.split("-");
	var result = "";
	for(i=0; i < ArrayText.length; i++){
		
			var FirstChart = ArrayText[i].charAt(0);
			if(i > 0){FirstChart = FirstChart.toUpperCase()}
			result += FirstChart+ArrayText[i].substr(1);
		
	}
	return result;
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

/*--------------------------------------оригинал*/
function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert( camelize("background-color") ); // backgroundColor
alert( camelize("list-style-image") ); // listStyleImage
alert( camelize("-webkit-transition") ); // WebkitTransition


/*##################################################3
Функция removeClass
У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами.
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть.
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке.
Лишних пробелов после функции образовываться не должно.
*/

/*--------------------------------------Мой вариант*/

function removeClass(objectR, classR){
var ar = objectR.className ? objectR.className.split(" ") : [];
var newar = [];

for(i=0; i <= ar.length; i++){

if(ar[i] != classR){
	newar.push(ar[i]);
}
}
newar = newar.join(" ");
newar = newar.slice(0,newar.length-1);
objectR.className = newar;
console.log(objectR);
}

obj = {
  className: 'my menu menu'
};
removeClass(obj, 'menu');

/*--------------------------------------оригинал*/

function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); // удалить класс
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');

}

var obj = {
  className: 'open menu menu'
}

removeClass(obj, 'blabla');
removeClass(obj, 'menu')
alert(obj.className) // open


/*##################################################4
Фильтрация массива "на месте"
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr
 и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
 Функция должна менять сам массив и ничего не возвращать.
*/

/*--------------------------------------Мой вариант*/
arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
	for (i=0; i < arr.length; i++){
		if(a <= arr[i] || arr[i] <= b){
			arr.splice(i,1);
		}
	}
	console.log(arr);
}

filterRangeInPlace(arr, 1, 4)

/*--------------------------------------оригинал*/

function filterRangeInPlace(arr, a, b) {

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (val < a || val > b) {
      arr.splice(i--, 1);
    }
  }

}

var arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
alert( arr ); // [3, 1]

/*##################################################5
Сортировать в обратном порядке
Как отсортировать массив чисел в обратном порядке?

*/

/*--------------------------------------Мой вариант*/

var arr = [5, 2, 1, -10, 8];

function sortNumReverse(a,b){ // НУжно только для чесел
	if(a>b) return -1;
	if(a<b) return 1;

}

arr.sort(sortNumReverse);
alert(arr);

/*--------------------------------------оригинал*/

var arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
  return b - a;
}

arr.sort(compareReversed);

alert( arr );


/*##################################################6
Скопировать и отсортировать массив
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
Постарайтесь сделать код как можно короче.
*/
/*--------------------------------------Мой вариант*/
var arr = ["HTML", "JavaScript", "CSS"];
var arrSorted = [];

function sorFunc(a, b){
	return a-b;
}

for (i=0;i<arr.length; i++){
	arrSorted.push(arr[i]);
}

arrSorted.sort(sorFunc);
alert (arrSorted);

/*--------------------------------------оригинал*/

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr.slice().sort();

/*##################################################7
Случайный порядок в массиве
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.
*/
/*--------------------------------------мой и оригинал*/
var arr = [1, 2, 3, 4, 5];
function myFun(a,b){
return 0.5 - Math.random();
// alert( a + " <> " + b );
}
arr.sort(myFun);
alert(arr);

/*##################################################8
Сортировка объектов
Напишите код, который отсортирует массив объектов people по полю age.
Выведите список имён в массиве после сортировки.
*/
/*--------------------------------------мой и оригинал*/
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };


var people = [ vasya , masha , vovochka ];

function sortAge(a,b){
	return a.age - b.age;
}

people.sort(sortAge);

alert(JSON.stringify(people));


/*##################################################9

Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
*/


var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

-----------------------noRecurce
function printList(obj){
	var newVal = obj; 
	while(newVal){
		alert(newVal.value);
		newVal = newVal.next;
	}
	
	или

    for(var newVal = list; newVal != null; newVal = newVal.next){
        alert(newVal.value);
    }


}

function printReverseList(obj){
	var newAr = obj
	var newArRevers = [];
	while(newAr){
		newArRevers.push(newAr.value);
		newAr = newAr.next;
	}
	newArRevers = newArRevers.revers();
	for(i=0; i< newArRevers.length; i++){
		alert(newArRevers[i]);
	}
	
}

printList(list);
printReverseList(list);

-----------------------Recurce
function printList(obj){
var obj2 = obj;
	alert(obj2.value);
if(obj2.next != null){
	return printList(obj2.next);
}

}

function printReverseList(obj){

if(obj.next){

	printList(obj.next);
}
alert(obj.value);
}

printList(list);
printReverseList(list);

/*##################################################10
Отфильтровать анаграммы
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

/*--------------------------------------мой вариант*/
var arr = ["воз", "ЗОВ", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "сddfeектор"];

function aclean(arrayN) {

  var newAr = arrayN.slice();
  var counter = 0;
  for (var i = 0; i < arrayN.length; i++) {

    var item1 = arrayN[i].toLowerCase();
    for (var k = 0; k < counter; k++) {
      var item2 = newAr[k].toLowerCase();
      var cnt = 0;

      if (item1.length == item2.length) {
        for (var j = 0; j < item2.length; j++) {
          if (item1.indexOf(item2[j]) > -1) {
            cnt++;
          }
        }

        if (cnt == item1.length) {
          arrayN.splice(i, 1);
          i--;
			break;
        }

      }
    }

    counter++;
  }
  return arrayN;
}

alert(aclean(arr));

/*--------------------------------------оригинал*/

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(hyArr){
var objExcluzive = {};
var res = [];

    for(i=0; i<hyArr.length; i++){
        var sortString = hyArr[i].toLowerCase().split('').sort().join('');
        objExcluzive[sortString] = hyArr[i];
    }

  for(key in objExcluzive){
    res.push(objExcluzive[key]);
  }

return res;

}

alert( aclean(arr) );

/*##################################################11
Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
*/
/*--------------------------------------мой вариант*/
function unique(arr) {
  var newAr = [];
  for (var i=0; i<arr.length; i++){
    if(newAr.indexOf(arr[i]) < 0){
      newAr.push(arr[i]);
    }
  }

  return newAr;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );
/*--------------------------------------оригинал*/
function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) ); // кришна, харе, 8-()

/*##################################################12 
Массив частичных сумм
На входе массив чисел, например: arr = [1,2,3,4,5].

Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.
*/

/*--------------------------------------мой вариант*/
arr = [ 1, 2, 3, 4, 5 ]

function getSums(arr){
var resAr = [];
for(i=1; i <= arr.length; i++){
	var result = arr.slice(0, i);
	var resultReduce = result.reduce(function(sum,current){
	
		return sum+current;

	});
resAr.push(resultReduce);

}
return resAr;
}

alert(getSums(arr));



/*000000000000000000000000000000000000000
Как в функции отличить отсутствующий аргумент от undefined?
*/
/*--------------------------------------Мой вариант*/
function f(x) {
if(arguments.length > 0) return 1
return 0; 
}
f();

/*-------------
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов
*/
/*--------------------------------------Мой вариант*/
function sum(){
	var result = 0;
	if(arguments.length == 0)return result;
		for(var i =0; i < arguments.length; i++){
			arguments[i] ? arguments[i] : 0;
			result+=arguments[i];
		}
	return result;
}

sum(1, 2, 3, 4,3,54,42,2, ,5,7,9,5,3,2);
