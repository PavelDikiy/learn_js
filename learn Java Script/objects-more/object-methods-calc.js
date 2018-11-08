/*
Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/

var calculator = {
val1: "",
val2: "",
  read: function(){
    this.val1 = +prompt('укажите число',0);
    this.val2 = +prompt('укажите число',0);
  },
  sum: function(){
    if(typeof this.val1 == "number" && typeof this.val2 == "number"){
      return(this.val1+this.val2);
    }
  },
  mul: function(){
    if(typeof this.val1 == "number" && typeof this.val2 == "number"){
      return(this.val1*this.val2);
    }
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
