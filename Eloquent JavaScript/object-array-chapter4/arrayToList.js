/*
Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка,
 {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную.
 Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента каждого из них.
 Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], а также функцию listToArray,
 которая создаёт массив из списка. Также напишите вспомогательную функцию prepend, которая получает элемент и создаёт новый список,
 где этот элемент добавлен спереди к первоначальному списку, и функцию nth, которая в качестве аргументов принимает список и число,
 а возвращает элемент на заданной позиции в списке или же undefined в случае отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.
*/

function arrayToList(arr){
//вариант 1 с циклом
/* 
var list = null;
for(var i = arr.length - 1; i >= 0; i--){
list = {"value":arr[i],"rest":list};
}
*/

//вариант 2 с рекурсией
/*if(arr.length > 0){
	
return {
	"value": arr.shift(),
	"rest": arrayToList(arr)
}
}*/

//вариант 3 гибрид
var obj = {};
for(var i =0; i < arr.length; i++){
	obj.value = arr.splice(0,1)[0],
	obj.rest = arrayToList(arr)
}
return obj;

}

arrayToList([1,2,3]);



function arrayToList(arr){

if(arr.length > 0){
return {
	"value":arr.shift(),
	"rest": arrayToList(arr)
}
}
}

//----------------
function listToArray(list){
	var list2 = list;
	var newAr = [];
	while(list2){
		 newAr.push(list2.value);
		list2 = list2.rest;
	}
	return newAr;
}

//----------------
function prepend(strg, list){
	return {"value": strg, "rest":list}
}

//----------------
function nth(list,numb){
	
	if(numb > 0){
	return nth(list.rest,numb-1);
	}else if(numb == 0){return list.value;}
else{
		return undefined;
	}
}
