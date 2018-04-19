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
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Author = (function () {
    function Author(name) {
        this.name = name;
    }
    return Author;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('log');
    };
    return ConsoleLogger;
}());
var jim = extend(new Author('Jim'), new ConsoleLogger());
console.log(jim.name);
jim.log();
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    else {
        return padding + value;
    }
}
padLeft('Hello', 4);
var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(' ');
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var getRandomPadder = function () { return Math.random() < 0.5 ?
    new SpaceRepeatingPadder(2) :
    new StringPadder('  '); };
var padder = getRandomPadder();
function nullRemoval(sn) {
    if (sn === null) {
        return 'default';
    }
    return sn;
}
function fixed(name) {
    function postfix(epithet) {
        return name.charAt(0) + '. the ' + epithet;
    }
    name = name || 'Bob';
    return postfix('great');
}
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
var BasicCalculator = (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.subtract = function (operand) {
        this.value -= operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    BasicCalculator.prototype.divide = function (operand) {
        this.value /= operand;
        return this;
    };
    return BasicCalculator;
}());
var ScientificCalculator = (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(BasicCalculator));
var val = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
function pluck(object, names) {
    return names.map(function (name) { return object[name]; });
}
var joe = {
    name: 'Joe',
    salary: 100000,
    age: 30,
    department: 'eng',
};
var names = pluck(joe, ['name', 'age']);
//# sourceMappingURL=advanced_types.js.map