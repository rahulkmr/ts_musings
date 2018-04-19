"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var StrDirection;
(function (StrDirection) {
    StrDirection["Up"] = "UP";
    StrDirection["Down"] = "DOWN";
    StrDirection["Left"] = "LEFT";
    StrDirection["Right"] = "RIGHT";
})(StrDirection || (StrDirection = {}));
var Hetrogenous;
(function (Hetrogenous) {
    Hetrogenous[Hetrogenous["No"] = 0] = "No";
    Hetrogenous["Yes"] = "YES";
})(Hetrogenous || (Hetrogenous = {}));
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 0] = "Circle";
    Shapes[Shapes["Square"] = 1] = "Square";
})(Shapes || (Shapes = {}));
//# sourceMappingURL=enums.js.map