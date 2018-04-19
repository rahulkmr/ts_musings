"use strict";
var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activable = (function () {
    function Activable() {
    }
    Activable.prototype.activate = function () {
        this.isActive = true;
    };
    Activable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activable;
}());
var Smart = (function () {
    function Smart() {
        this.isDisposed = false;
        this.isActive = false;
    }
    return Smart;
}());
var mixin = function (derived, bases) {
    bases.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derived.prototype[name] = base.prototype[name];
        });
    });
};
var smart = new Smart();
//# sourceMappingURL=mixins.js.map