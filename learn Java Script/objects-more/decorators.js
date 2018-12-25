/*
Логирующий декоратор (1 аргумент)

Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.
Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log,
 а затем передает вызов в f.
В этой задаче можно считать, что у функции f ровно один аргумент.
*/

function work(a) {
  /* ... */ // work - произвольная функция, один аргумент
  console.log(a);
}

function makeLogging(f, log) {
  return function () {
    log.push(arguments[0]);


    return f.apply(this, arguments);
  }

}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}

/*---------------------------------------------------------------*/
/*
Логирующий декоратор (много аргументов)

Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку,
 которая при каждом вызове добавляет её аргументы в массив log.
Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.
*/

function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) { /* ваш код */ }

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

/*---------------------------------------------------------------*/
/*
Кеширующий декоратор

Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.
В этой задаче функция f имеет только один аргумент, и он является числом.
При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
*/

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  var varibl, resul;

  function memory(a) {

    if (varibl === a) {
      return resul;
    }

    varibl = a;
    resul = f.call(this, a)
    return resul;

  }

  return memory;


}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое