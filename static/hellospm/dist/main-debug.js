define("myspm/hellospm/1.0.0/main-debug", [ "jquery-debug", "myspm/hellospm/1.0.0/hello-debug", "util-debug", "myspm/hellospm/1.0.0/handle-text-debug" ], function(require) {
    var $ = require("jquery-debug");
    var Hello = require("./hello-debug");
    $(document).keypress(function(ev) {
        if (ev.which == 32) {
            new Hello();
        }
    });
});

define("myspm/hellospm/1.0.0/hello-debug", [ "jquery-debug", "util-debug", "myspm/hellospm/1.0.0/handle-text-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    var random = require("util-debug").random;
    var handleText = require("myspm/hellospm/1.0.0/handle-text-debug");
    function Hello() {
        this.render();
        this.bindAction();
        console.log("new Hello() called.");
    }
    Hello.prototype.render = function() {
        this.el = $('<div style="position:fixed;' + "left:" + random(0, 70) + "%;" + "top:" + random(10, 80) + '%;">' + handleText("Hello SPM !") + "</div>").appendTo("body");
    };
    Hello.prototype.bindAction = function() {
        var el = this.el;
        setTimeout(function() {
            el.fadeOut();
        }, random(500, 5e3));
    };
    module.exports = Hello;
});

define("myspm/hellospm/1.0.0/handle-text-debug", [ "jquery-debug", "util-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    var random = require("util-debug").random;
    function handleText(text) {
        var min = random(30, 70);
        var max = random(50, 120);
        var rt = "";
        for (var i = 0, len = text.length; i < len; i++) {
            rt += '<span style="font-size:' + random(min, max) + 'px;">' + text[i] + "</span>";
        }
        return rt;
    }
    module.exports = handleText;
});
