/*
Написать объект с геттерами и сеттерами

Напишите конструктор User для создания объектов:
С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.
*/

function User() {
var fisrtName, surname;

  this.setFirstName = function(name){
  fisrtName = name;
  };
  this.setSurname = function(name){
  surname = name;
  };
  this.getFullName = function(){
    return(fisrtName+" "+surname);
  };
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов

/*---------------------------------------------------------*/
/*Добавить метод isRunning
Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.
*/
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var timerId = false;

  this.isRunning = function() {
    return timerId;
  };

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
  timerId = true;
    setTimeout(function() {
     timerId = false;
      onReady();
    }, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});
