/*Реализуйте функцию-декоратор, считающую количество вызовов переданной функции
 и предоставляющую возможность получить это число по требованию. 
*/

function count(func){
  var countNum = 0;
  var joinFunction;

  function sherbele(){
  countNum++;
  return func.apply(null, arguments);
  }
  

    sherbele.getCalls = function(){
    return countNum;
    }

    return sherbele;

}

const csum= count((x, y) => x + y); 
alert(csum(3, 7)); // 10
alert(csum(9, 6)); // 15
alert(csum(3, 72)); // 75
alert(csum.getCalls()); // 3

/* немного не тот вариант*/
/*

function count(func){
  var countNum = 0;
  var joinFunction;

  function sherbele(){
  countNum++;
  return this;
  }
  
  joinFunction=sherbele.bind(func);
    joinFunction.getCalls = function(){
    return countNum;
    }

    return joinFunction;

}

const csum= count((x, y) => x + y); 
alert(csum()(3, 7)); // 10
alert(csum()(9, 6)); // 15
alert(csum()(3, 72)); // 75
alert(csum.getCalls()); // 3
const csum1= count((x, y) => x + y); 
alert(csum1()(3, 7)); // 10
alert(csum1.getCalls()); // 2
*/
