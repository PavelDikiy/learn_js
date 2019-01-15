/*
№1
Перепишите в виде класса

Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.
Исходный код:

 function CoffeeMachine(power) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.run = function() {
    setTimeout(function() {
      alert( 'Кофе готов!' );
    }, getTimeToBoil());
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

P.S. При описании через прототипы локальные переменные недоступны методам, поэтому нужно будет переделать их в защищённые свойства.
*/

function CoffeeMachine(power) {
	this.waterAmount = 0;
	this._WATER_HEAT_CAPACITY = 4200;
	this._power = power;
}

CoffeeMachine.prototype.getTimeToBoil = function(){
 return this.waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.setWaterAmount = function(amount){
	this.waterAmount = amount;
}

CoffeeMachine.prototype.run = function(){
	var _this = this;
	  setTimeout(function() {
          alert( 'Кофе готов! Воды' + _this.waterAmount + 'мл' );
    }, this.getTimeToBoil());
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

/*--------------------------------------*/

/*
№2
Хомяки с __proto__

Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму.
Один из программистов получил задание создать класс «хомяк» (англ – "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
В чём дело? Как поправить?

 function Hamster() {}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
*/

function Hamster() {
  this.food = [];
}

//Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
