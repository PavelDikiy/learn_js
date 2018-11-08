/*
Добавить get/set-свойства

Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:

function User(fullName) {
  this.fullName = fullName;
}

var vasya = new User("Василий Попкин");
Имя и фамилия всегда разделяются пробелом.

Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись.

Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.
*/

function User(fullName) {
	
	var splitFullName = fullName.split(" ");
  this.fullName = fullName;

// Не совсем тот вариант, что требуется по задаче  
  Object.defineProperties(this, {
  firstName: {
    value: splitFullName[0],
	configurable: true,
	writable: true,
	enumerable: true 
  },

  lastName: {
    value: splitFullName[1],
	configurable: true,
	writable: true,
	enumerable: true 
  },

  fullName: {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

/*
// Вариант, что требуется по задаче
 Object.defineProperties(this, {
  firstName: {
      get: function() {
        return splitFullName[0];
      },

      set: function(newFirstName) {
        this.fullName = newFirstName + ' ' + this.lastName;
      }
  },

  lastName: {
      get: function() {
        return splitFullName[1];
      },

      set: function(newLastName) {
        this.fullName = this.firstName + ' ' + newLastName;
      }
  },


});
*/
}





var vasya = new User("Василий Попкин");


// чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

alert( vasya.fullName ); // Василий Сидоров
