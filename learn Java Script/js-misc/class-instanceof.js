/*
Полиморфная функция formatDate

Напишите функцию formatDate(date), которая возвращает дату в формате dd.mm.yy.
Ее первый аргумент должен содержать дату в одном из видов:

Как объект Date.
Как строку, например yyyy-mm-dd или другую в стандартном формате даты.
Как число секунд с 01.01.1970.
Как массив [гггг, мм, дд], месяц начинается с нуля
Для этого вам понадобится определить тип данных аргумента и, при необходимости, преобразовать входные данные в нужный формат.
*/

    at <anonymous>:40:8
transDate @ VM3156:4
formatDate @ VM3156:35
(anonymous) @ VM3156:40
function formatDate(date) { 
    function transDate(normDate){

        var day = addZero(normDate.getDate());
        var month = addZero(normDate.getMonth()+1);
        var year = addZero(normDate.getFullYear() % 100);
		return day+"."+month+"."+year;
    }
function addZero(param){
var res = "";
if(param<=0){res="0"+(param+1)}else if(param < 10){res="0"+param}else{res=param};
return res;
}
if(typeof date == "number"){
	date = new Date(date*1000);
}
else if(typeof date == "string"){
    date = new Date(date);
}
else if(date.join){
var str = "";
for(var i = 0; i < date.length; i++){
str += addZero(date[i]);
if(i < date.length-1){str +="-";}
}
    date = new Date(str);
}
else if(date.getDate){
	date = date;
}

return transDate(date);

 }

alert( formatDate('2011-10-02') ); // 02.10.11
alert( formatDate(1234567890) ); // 14.02.09
alert( formatDate([2014, 0, 1]) ); // 01.01.14
alert( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
