define("myspm/hellospm/1.0.0/main-src", [ "jquery-src", "myspm/hellospm/1.0.0/hello-src", "util-src", "myspm/hellospm/1.0.0/handle-text-src" ], function(require) {
    var $ = require("jquery-src");
    var Hello = require("./hello-src");
    $(document).keypress(function(ev) {
        if (ev.which == 32) {
            new Hello();
        }
    });
});

define("myspm/hellospm/1.0.0/hello-src", [ "jquery-src", "util-src", "myspm/hellospm/1.0.0/handle-text-src" ], function(require, exports, module) {
    var $ = require("jquery-src");
    var random = require("util-src").random;
    var handleText = require("myspm/hellospm/1.0.0/handle-text-src");
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

define("myspm/hellospm/1.0.0/handle-text-src", [ "jquery-src", "util-src" ], function(require, exports, module) {
    var $ = require("jquery-src");
    var random = require("util-src").random;
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
