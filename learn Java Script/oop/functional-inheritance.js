/*
№1
Запускать только при включённой кофеварке

В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

*/

   function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      this.run = function() {
        if (!this._enabled) {
			alert("Кофеварка выключена");
        }else{
			setTimeout(onReady, 1000);
		}
      };

    }

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.run();
	
/*--------------------------------------------------------------*/

/*
№2
Останавливать кофеварку при выключении

Когда кофеварку выключают – текущая варка кофе должна останавливаться.
*/

   function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    }

    function CoffeeMachine(power) {
      Machine.apply(this, arguments);
		var timer = 0;
      var waterAmount = 0;
		var PrentDisable = this.disable;

		this.disable = function(){
			clearTimeout(timer);
			PrentDisable.call(this);
		};

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готов!');
      }

      this.run = function() {
        if (!this._enabled) {
			throw new Error ("Кофеварка выключена");
		}

			timer = setTimeout(onReady, 1000);

      };

    }

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();

/*--------------------------------------------------------------*/

/*
№3
Унаследуйте холодильник

Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():
Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами addFood(item1, item2...)
 для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе.
 При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого не должно влиять на свойство food холодильника.
*/

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power){
	Machine.apply(this, arguments);
	var food = [];
	var maxCount = this._power/100;


	this.addFood = function(){

		if(!this._enabled){
			throw new Error ("ошибка, холодильник выключен");
		}
		if((food.length + arguments.length) > maxCount){
			throw new Error ("ошибка, слишком много еды");
		}

		food.push(...arguments);

	}

	this.getFood = function(){
		var newAr = food.slice();
		return newAr;
	}

}
/*
var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен
*/
/*
// создать холодильник мощностью 500 (не более 5 еды)
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды
*/
/*
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
*/

/*--------------------------------------------------------------*/

/*
№4
Добавьте методы в холодильник


Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.
*/
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power){
Machine.apply(this, arguments);
var food = [];
var maxCount = this._power/100;




this.addFood = function(){

if(!this._enabled){
	throw new Error ("ошибка, холодильник выключен");
}
if((food.length + arguments.length) > maxCount){
	throw new Error ("ошибка, слишком много еды");
}

food.push(...arguments);

}

this.getFood = function(){
	var newAr = food.slice();
	return newAr;
}

this.filterFood = function(func){
	return food.filter(func);
}

this.removeFood = function(itemFilter){
	var count = 0;
	food.forEach(function(item) {
      if(itemFilter == item){
		food.splice(count,1);
		}
    count++;
    });
}


}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
alert( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});
console.log(dietItems);
dietItems.forEach(function(item) {
  alert( item.title ); // сок, зелень
  fridge.removeFood(item);
});

alert( fridge.getFood().length );

/*--------------------------------------------------------------*/

/*
№6
Переопределите disable

Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.

*/

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power){
Machine.apply(this, arguments);
var food = [];
var maxCount = this._power/100;
var ParentDisable = this.disable;

this.disable = function(){
	if(food.length){
		throw new Error("ошибка, в холодильнике есть еда");
	}
	ParentDisable();
}

this.addFood = function(){

if(!this._enabled){
	throw new Error ("ошибка, холодильник выключен");
}
if((food.length + arguments.length) > maxCount){
	throw new Error ("ошибка, слишком много еды");
}

food.push(...arguments);

}

this.getFood = function(){
	var newAr = food.slice();
	return newAr;
}

this.filterFood = function(func){
	return food.filter(func);
}

this.removeFood = function(itemFilter){
	var count = 0;
	food.forEach(function(item) {
      if(itemFilter == item){
		food.splice(count,1);
		}
    count++;
    });
}


}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable();
