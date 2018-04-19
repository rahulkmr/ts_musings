"use strict";
var list = [1, 2, 3];
var lis2 = [1, 2, 3];
var tuple;
tuple = ['hello', 1];
console.log(tuple[0].substr(1));
console.log(tuple[1].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
var colorName = Color[2];
var notSure = 4;
notSure = 'maybe a string';
notSure = false;
var warnUser = function () {
    alert('This is a warning');
};
var unusable = undefined;
function error(message) {
    throw new Error(message);
}
var someValue = 'this is a string';
var strLength = someValue.length;
//# sourceMappingURL=basic_types.js.map