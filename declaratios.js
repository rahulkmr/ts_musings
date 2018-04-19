"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var input = [1, 2];
var first = input[0], second = input[1];
var obj = {
    a: 'foo',
    b: 12,
    c: 'bar',
    d: true,
};
var a = obj.a, b = obj.b, passthrough = __rest(obj, ["a", "b"]);
var newName1 = obj.a, newName2 = obj.b;
function f(_a) {
    var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    console.log(a, b);
}
var foo = [1, 2];
var bar = [3, 4];
var both = [0].concat(foo, bar, [5]);
//# sourceMappingURL=declaratios.js.map