/* Добавить метод и свойство кофеварке

Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
 который будет останавливать кипячение (через clearTimeout).

P.S. Текущую температуру воды вычислять и хранить не требуется.
P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId, которое будет хранить текущий таймер.
*/

function CoffeeMachine(power) {
  this.waterAmount = 0;

var timerId = 0;
  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };

this.stop = function(){
	clearTimeout(timerId);
}

}
var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет

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
