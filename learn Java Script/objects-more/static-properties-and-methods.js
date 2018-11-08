/*
Счетчик объектов

Добавить в конструктор Article:

Подсчёт общего количества созданных объектов.
Запоминание даты последнего созданного объекта.
Используйте для этого статические свойства.

Пусть вызов Article.showStats() выводит то и другое.
*/

function Article() {
  this.created = new Date();
  Article.count++;
Article.date = this.created.getDate()+"."+this.created.getMonth()+"."+this.created.getFullYear();

}
Article.count = 0;
  Article.showStats = function(){
	  alert("Всего:"+this.count+", Последняя: ("+this.date+")");
  }
  
new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
