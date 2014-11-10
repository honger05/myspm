define("myspm/util/1.0.0/util-src", [], function(require, exports) {
    exports.random = function(min, max) {
        return min + Math.round(Math.random() * (max - min));
    };
});
