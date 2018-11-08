/*------------------------------------------------------*/
Имя дня недели
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
function getWeekDay(date2){
var options = {
  weekday: 'short'
};
	return date2.toLocaleString("ru",options);
}
var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );  

/*------------------------------------------------------*/

День недели в европейской нумерации
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.


var date = new Date(2012, 0, 3);

function getLocalDay(date2){
var arrDayWeek = {
"пн":1,"вт":2,"ср":3,"чт":4,"пт":5,"сб":6,"вс":7}
var dayss = date2.toLocaleString('ru', {weekday: 'short'});
return arrDayWeek[dayss]
}
alert( getLocalDay(date) );

/*------------------------------------------------------*/

День указанное количество дней назад
Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.

var date = new Date(2015, 0, 2);

function getDateAgo(date, dateAgo){
var newD = new Date(date.getTime());
 newD.setDate(newD.getDate()-dateAgo);

return newD.getDate();
}

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)

/*------------------------------------------------------*/

Последний день месяца?
Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

Параметры:
year – 4-значный год, например 2012.
month – месяц от 0 до 11.
Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month){
var OrDate = new Date(year,month);
var OrDateNext = new Date(year,month+1);
return (((OrDateNext.getTime()-OrDate.getTime())/1000)/3600)/24;
}
getLastDayOfMonth(2012, 1);

/*
function getLastDayOfMonth(year, month) {
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}
*/


/*------------------------------------------------------*/
Сколько секунд уже прошло сегодня?
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то 36000 
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday(){
var dateNow = new Date();
var date = new Date(dateNow);
date.setHours(0,0,0,0);
var result = dateNow.getTime()-date.getTime();
//alert(((result/1000)/3600)/24);
//alert(result/1000/60);
alert(date);
alert(dateNow);
alert(result/1000/3600);
}
getSecondsToday();


/*------------------------------------------------------*/
Сколько секунд - до завтра?
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

Например, если сейчас 23:00, то: 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow(){
var dateNow = new Date();
dateNow.setDate(dateNow.getDate()+1);
dateNow.setHours(0);
var date = new Date();
//date.setHours(0,0,0,0);
var result = dateNow.getTime()-date.getTime();
//alert(((result/1000)/3600)/24);
//alert(result/1000/60);
alert(date);
alert(dateNow);
alert(result/1000/3600);
}
getSecondsToTomorrow();


/*------------------------------------------------------*/
Вывести дату в формате дд.мм.гг
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг
P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.

var d = new Date(2014, 0, 30); // 30 января 2014
function formatDate(dateNow){
var corDay = dateNow.getDate() < 10 ? "0"+dateNow.getDate() : dateNow.getDate();
//var corMonth = ["01","02","03","04","05","06","07","08","09","10","11","12"];
var corMonth = dateNow.getMonth() < 10 ? "0"+dateNow.getMonth() : dateNow.getMonth();
var corYear =  ""+dateNow.getFullYear();
var corYear = corYear.split('').slice(2).join('');
//var result = corDay+"."+corMonth[dateNow.getMonth()]+"."+corYear;
var result = corDay+"."+corMonth+"."+corYear;
return result;
}

/*------------------------------------------------------*/
Относительное форматирование даты
Напишите функцию formatDate(date), которая форматирует дату date так:

Если со времени date прошло менее секунды, то возвращает "только что".
Иначе если со времени date прошло менее минуты, то "n сек. назад".
Иначе если прошло меньше часа, то "m мин. назад".
Иначе полная дата в формате "дд.мм.гг чч:мм".

function formatDate(date) {
var dateNow = Date.now();
var argDate = date.getTime();
var result = dateNow-argDate;
var options = {
	hour12: false,
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
};

if(result < 1000){return "только что";}
else if(result > 1000 && result <= 1000*60){return result/1000+" сек. назад";}
else if(result > 1000*60 && result <= 1000*60*60){return result/1000/60+" мин. назад";}
else { return date.toLocaleString("ru", options).replace(", "," "); /*result.getDate();*/}

}
