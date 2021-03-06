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
    this._power = power;
    this._waterAmount = 0;
}

CoffeeMachine.prototype._WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype.getTimeToBoil = function() {
    return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
}

CoffeeMachine.prototype.run = function() {
    var self = this;
    setTimeout(function() {
        alert(`Кофе готов! ${self._waterAmount}`);
    }, this.getTimeToBoil());
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this._waterAmount = amount;
};

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();

/*-------------------------- ES6 ---------------------------*/

'use strict';
class CoffeeMachine {
    constructor(power) {
        this._power = power;
        this._waterAmount = 0;
        this._WATER_HEAT_CAPACITY = 4200;
    }

    getTimeToBoil() {
        return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this._power;
    }

    run() {
        var self = this;
        setTimeout(function() {
            alert(`Кофе готов! ${self._waterAmount}`);
        }, this.getTimeToBoil());
    };

    set WaterAmount(amount) {
        this._waterAmount = amount;
    };
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.WaterAmount = 50;
coffeeMachine.run();

/*-------------------------- ES6 ---------------------------*/

/*--------------------------------------------*/

/*
№3
Класс "часы"

Есть реализация часиков, оформленная в виде одной функции-конструктора.
У неё есть приватные свойства timer, template и метод render.
Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.
P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).
*/

function Clock(options) {
    this._ClockOption = options;
    this._timer = 0;
}

Clock.prototype._render = function() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._ClockOption.template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
}

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    var _this = this;
    this._render();
    this._timer = setInterval(function() {
        _this._render()
    }, 1000);
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();



/*-------------------------- ES6 ---------------------------*/


class Clock {
    constructor(options) {
        this._ClockOptionTmpl = options.template;
        this._timer = 0;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        var output = this._ClockOptionTmpl.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);
    }

    stop() {
        clearInterval(this._timer);
    }

    start() {
        this._render();
        this._timer = setInterval(() => {
            this.render()
        }, 1000);
    }
};

var clock = new Clock({
    template: 'h:m:s'
});

clock.start();


/*-------------------------- ES6 ---------------------------*/

/*--------------------------------------------*/

/*
№4
Класс "расширенные часы"

Есть реализация часиков на прототипах. Создайте класс, расширяющий её,
добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval.
Значение по умолчанию: 1000.

Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
Исходный класс Clock менять нельзя.
Пусть конструктор потомка вызывает конструктор родителя.
Это позволит избежать проблем при расширении Clock новыми опциями.
  
  
*/
function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.log(output);
};

Clock.prototype.stop = function() {
    clearInterval(this._timer);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, 1000);
};

function extend(Child, Parent) {
    Child.prototype = inherit(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.parent = Parent.prototype;
}

function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}

// ваш код
function ExtendedClock(option) {
    Clock.apply(this, arguments);
    this._ClockPrecision = +option.precision || 1000;
}
extend(ExtendedClock, Clock);

ExtendedClock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function() {
        self._render();
    }, this._ClockPrecision);
};



var lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 2000
});

lowResolutionClock.start();


/*-------------------------- ES6 ---------------------------*/


class Clock {
    constructor(options) {
        this._template = options.template;
    }


    _render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var min = date.getMinutes();
        if (min < 10) min = '0' + min;

        var sec = date.getSeconds();
        if (sec < 10) sec = '0' + sec;

        var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

        console.log(output);
    };

    stop() {
        clearInterval(this._timer);
    };

    start() {
        this._render();
        this._timer = setInterval(() => {
            this._render();
        }, 1000);
    };
}

class ExtendedClock extends Clock {
    constructor(option) {
        super(...arguments);
        this._ClockPrecision = +option.precision || 1000;
    }

    start() {
        this._render();
        this._timer = setInterval(() => {
            this._render();
        }, this._ClockPrecision);
    };

}

var lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 2000
});

lowResolutionClock.start();


/*-------------------------- ES6 ---------------------------*/


/*--------------------------------------------*/

/*
№5
Меню с таймером для анимации

Есть класс Menu. У него может быть два состояния: открыто STATE_OPEN и закрыто STATE_CLOSED.

Создайте наследника AnimatingMenu, который добавляет третье состояние STATE_ANIMATING.
При вызове open() состояние меняется на STATE_ANIMATING, а через 1 секунду,
по таймеру, открытие завершается вызовом open() родителя.
Вызов close() при необходимости отменяет таймер анимации (назначаемый в open) и передаёт вызов родительскому close.
Метод showState для нового состояния выводит "анимация", для остальных – полагается на родителя.

*/

function Menu(state) {
    this._state = state || this.STATE_CLOSED;
};

Menu.prototype.STATE_OPEN = 1;
Menu.prototype.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = this.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = this.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case this.STATE_OPEN:
            return 'открыто';

        case this.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function() {
    alert(this._stateAsString());
};
/*----*/
function AnimatingMenu() {
    Menu.apply(this, arguments);
};

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    var _this = this;
    this._state = this.STATE_ANIMATING
    this._timer = setTimeout(function() {
        Menu.prototype.open.call(_this);
    }, 1000);
};

AnimatingMenu.prototype.close = function() {
    clearTimeout(this._timer);
    Menu.prototype.close.call(this);
};

AnimatingMenu.prototype._stateAsString = function() {
    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';
        default:
            return Menu.prototype._stateAsString.apply(this, arguments);
    }
};

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1200);

/*-------------------------- ES6 ---------------------------*/


class Menu {
    constructor(state) {
        this.STATE_OPEN = 1;
        this.STATE_CLOSED = 0;
        this._state = state || this.STATE_CLOSED;
    }

    open() {
        this._state = this.STATE_OPEN;
    };

    close() {
        this._state = this.STATE_CLOSED;
    };

    _stateAsString() {

        switch (this._state) {
            case this.STATE_OPEN:
                return 'открыто';

            case this.STATE_CLOSED:
                return 'закрыто';
        }
    };

    showState() {
        alert(this._stateAsString());
    };


};
/*----*/

class AnimatingMenu extends Menu {
    constructor() {
        super(0);
        this.STATE_ANIMATING = 2;
    }

    open() {
        var _this = this;
        this._state = this.STATE_ANIMATING;
        this._timer = setTimeout(() => {
            super.open();
        }, 1000);
    };

    close() {
        clearTimeout(this._timer);
        super.close();
    };

    _stateAsString() {
        switch (this._state) {
            case this.STATE_ANIMATING:
                return 'анимация';
            default:
                return super._stateAsString();
        }
    };

};


var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() { // через 1 секунду
    menu.showState(); // открыто

    menu.close();
    menu.showState(); // закрыто
}, 1200);


/*-------------------------- ES6 ---------------------------*/
