/*
Функция принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'.
*/

function newString(){
  return [].slice.call(arguments,1).join(arguments[0]);
}
newString( '*', '1', 'b', '1c');
