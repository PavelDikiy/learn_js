/*
№1
Добавить функциям defer

Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.
*/
Function.prototype.defer = function(ms){
  var _this = this;
  setTimeout(function(){
    _this.call(null);
  },ms);
/*  setTimeout(this,ms); */
};
function f() {
  alert( "привет" );
}

f.defer(1000);

/*-------------------------------------------------*/

/*
№2
Добавить функциям defer с аргументами

Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
То есть, должны корректно передаваться аргументы.
*/
// Вариант 1
Function.prototype.defer = function(ms){
  var _this = this;
    return function(){
    var _arguments = arguments;
    setTimeout(() => {
      _this.apply(this,_arguments);
      //_this(..._arguments); // без передачи контекста
    },ms);
  }

};
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);

// Вариант 2
Function.prototype.defer = function(ms){
  var _thisFunc = this;
  return function(){
    var _arguments = arguments;
    var _CloseThis = this;
    setTimeout(function(){
      _thisFunc.apply(_CloseThis,_arguments);
  },ms);
  }

};
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);
