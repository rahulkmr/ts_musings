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
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var GenericNumber = (function () {
    function GenericNumber(zero, add) {
        this.zero = zero;
        this.add = add;
    }
    return GenericNumber;
}());
function getProperty(object, key) {
    return object[key];
}
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
        this.hasMask = true;
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
        this.nameTag = '';
    }
    return ZooKeeper;
}());
var Wild = (function () {
    function Wild() {
        this.numLegs = 2;
    }
    return Wild;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee(keeper) {
        var _this = _super.call(this) || this;
        _this.keeper = keeper;
        return _this;
    }
    return Bee;
}(Wild));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion(keeper) {
        var _this = _super.call(this) || this;
        _this.keeper = keeper;
        return _this;
    }
    return Lion;
}(Wild));
function createInstance(c) {
    return new c();
}
//# sourceMappingURL=generics.js.map