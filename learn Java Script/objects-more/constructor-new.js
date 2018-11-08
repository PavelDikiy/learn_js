/*

Создать Calculator при помощи конструктора

Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.

*/

function Calculator(){
  this.read = function(){
    this.val1 = +prompt('укажите число',0);
    this.val2 = +prompt('укажите число',0);
  };
  
  this.sum = function(){
    if(typeof this.val1 == "number" && typeof this.val2 == "number"){
      return(this.val1+this.val2);
    }
  };
  
  this.mul = function(){
    if(typeof this.val1 == "number" && typeof this.val2 == "number"){
      return(this.val1*this.val2);
    }
  };
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

//----------------------------------------------------------

/*

Создать Accumulator при помощи конструктора

Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то,
 что вводит посетитель.

Более формально, объект должен:

Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

*/

function Accumulator(val){
	this.value = val,
	
	this.read = function(){
		this.value = this.value + (+prompt("Добавь число",0));
	}
	
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение


//----------------------------------------------------------

/*

Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

Эта задача состоит из двух частей, которые можно решать одна за другой.

Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО»
 (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции.
 Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

Например, добавим операции умножить *, поделить / и возвести в степень **:


Поддержка скобок и сложных математических выражений в этой задаче не требуется.
Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
Предусмотрите обработку ошибок. Какая она должна быть – решите сами.

*/

function Calculator(){
var objCalc = {
	
	"+": function(a,b){return (+a)+(+b);},
	"-": function(a,b){return a-b;}
}

	
	this.calculate = function(str){
	var valueAr = str.split(" ");
		/*
		Для "+" и "-" в одной строке
		for (var i = 0; i < valueAr.length; i++){
		if(valueAr[i]=="+"){++i; this.result += +valueAr[i];}
		else if(valueAr[i]=="-"){++i; this.result = this.result - (+valueAr[i]);}
		else{this.result += +valueAr[i];}
		}
		return this.result;*/
		if(objCalc[valueAr[1]] && !isNaN(valueAr[0]) && !isNaN(valueAr[2])){return objCalc[valueAr[1]](valueAr[0],valueAr[2])}
		else{
			return NaN;
		}

	}
	
	this.addMethod = function(arg, func){
		objCalc[arg]=func;
	}
	
}


var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
var result2 = powerCalc.calculate("2 + 3");
alert( result ); // 8
alert( result2 ); // 8

