/*
Реализовать методы seven, plus, one, five, minus, two. seven(plus(one())) -> 8. five(minus(two())) -> 3
*/

function seven(param){
	return 7+(param || 0);
}
function five(param){
	return 5+(param || 0);
}
function two(param){
	return 2+(param || 0);
}
function one(param){
	return 1+(param || 0);
}

function plus(param){
	return param;
}

function minus(param){
	return -param;
}


seven(plus(one()));
five(minus(two()));
