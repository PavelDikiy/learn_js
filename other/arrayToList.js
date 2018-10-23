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
