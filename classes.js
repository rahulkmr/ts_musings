"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
var Mammal = (function () {
    function Mammal(name) {
        this.name = name;
    }
    Mammal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Animal moved " + distance + "m");
    };
    return Mammal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Mammal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Mammal));
var Doggy = (function (_super) {
    __extends(Doggy, _super);
    function Doggy(name) {
        return _super.call(this, name) || this;
    }
    Doggy.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Doggy;
}(Mammal));
var dog = new Doggy('Jimmy');
dog.bark();
dog.move(10);
var sam = new Snake('Sammy the python');
var tom = new Horse('Tommy the horse');
sam.move();
tom.move(34);
var Octopus = (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
var Employee = (function () {
    function Employee() {
        this._fullName = '';
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = 'Bob Smith';
console.log(employee.fullName);
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.distanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department " + this.name);
    };
    return Department;
}());
var Accounting = (function (_super) {
    __extends(Accounting, _super);
    function Accounting() {
        return _super.call(this, 'Accounting') || this;
    }
    Accounting.prototype.printMeeting = function () {
        console.log('Accounting department meets every Monday at 10am');
    };
    Accounting.prototype.generateReports = function () {
        console.log('Generating reports');
    };
    return Accounting;
}(Department));
//# sourceMappingURL=classes.js.map