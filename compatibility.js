"use strict";
var Foo = (function () {
    function Foo() {
        this.name = '';
    }
    return Foo;
}());
var p = new Foo();
var alice = { name: 'Alice', location: 'Seattle' };
var x = alice;
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item); });
items.forEach(function (item) { return console.log(item); });
var less = function (a) { return 0; };
var more = function (a, s) { return 0; };
more = less;
var lessReturn = function () { return ({ name: 'Alice' }); };
var moreReturn = function () { return ({ name: 'Alice', location: 'Seattle' }); };
lessReturn = moreReturn;
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
}
function func1(e) {
    console.log(e.posX, e.posY);
}
listenEvent(EventType.Mouse, func1);
//# sourceMappingURL=compatibility.js.map