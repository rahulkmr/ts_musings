"use strict";
var Album = (function () {
    function Album() {
    }
    return Album;
}());
(function (Album) {
    var Label = (function () {
        function Label() {
        }
        return Label;
    }());
    Album.Label = Label;
})(Album || (Album = {}));
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = '';
    buildLabel.prefix = 'Hello, ';
})(buildLabel || (buildLabel = {}));
//# sourceMappingURL=merging.js.map