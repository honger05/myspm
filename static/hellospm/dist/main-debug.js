define("myspm/hellospm/1.0.0/main-debug", [ "jquery-debug", "./hello-debug", "./util/util-debug", "./handle-text-debug", "./zui/overlay-debug", "./zui/common-debug", "bui/overlay-debug" ], function(require) {
    var $ = require("jquery-debug");
    window.$ = window.jQuery = $;
    var Hello = require("./hello-debug");
    $(document).keypress(function(ev) {
        if (ev.which == 32) {
            new Hello();
        }
    });
    //测试zui
    var Overlay = require("./zui/overlay-debug");
    var o = new Overlay();
    o.show();
    //测试bui
    var Overlay = require("bui/overlay-debug");
    var Message = Overlay.Message;
    Message.Alert("这是拿来测试bui的！", function() {
        o.hide();
    }, "info");
});

define("myspm/hellospm/1.0.0/hello-debug", [ "jquery-debug", "myspm/hellospm/1.0.0/util/util-debug", "myspm/hellospm/1.0.0/handle-text-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    var random = require("myspm/hellospm/1.0.0/util/util-debug").random;
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

define("myspm/hellospm/1.0.0/util/util-debug", [], function(require, exports) {
    exports.random = function(min, max) {
        return min + Math.round(Math.random() * (max - min));
    };
});

define("myspm/hellospm/1.0.0/handle-text-debug", [ "jquery-debug", "myspm/hellospm/1.0.0/util/util-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    var random = require("myspm/hellospm/1.0.0/util/util-debug").random;
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

define("myspm/hellospm/1.0.0/zui/overlay-debug", [ "myspm/hellospm/1.0.0/zui/common-debug" ], function(require, exports, module) {
    var common = require("myspm/hellospm/1.0.0/zui/common-debug");
    var Overlay = function() {
        this.element = common.createElement("div", {
            styles: {
                display: "none",
                width: "100%",
                backgroundColor: "#000",
                opacity: .35,
                position: "absolute",
                zIndex: 1,
                left: 0,
                top: 0,
                bottom: 0
            }
        });
        document.body.appendChild(this.element);
    };
    module.exports = Overlay;
    Overlay.prototype.show = function() {
        this.element.style.display = "block";
    };
    Overlay.prototype.hide = function() {
        this.element.style.display = "none";
    };
});

define("myspm/hellospm/1.0.0/zui/common-debug", [], function(require, exports, module) {
    var common = {
        //创建元素
        createElement: function(tagName, attr) {
            var element = null;
            if (typeof tagName === "string") {
                element = document.createElement(tagName);
                if (typeof attr === "object") {
                    var keyAttr, keyStyle;
                    for (keyAttr in attr) {
                        if (keyAttr === "styles" && typeof attr[keyAttr] === "object") {
                            // 样式们
                            for (keyStyle in attr[keyAttr]) {
                                element.style[keyStyle] = attr[keyAttr][keyStyle];
                                if (keyStyle === "opacity" && window.innerWidth + "" == "undefined") {
                                    element.style.filter = "alpha(opacity=" + attr[keyAttr][keyStyle] * 100 + ")";
                                }
                            }
                        } else {
                            if (keyAttr === "class") {
                                keyAttr = "className";
                            }
                            element[keyAttr] = attr[keyAttr];
                            attr["class"];
                        }
                    }
                }
            }
            return element;
        },
        //url地址后加随机数
        queryRandom: function(url) {
            var strQueryRandom = "random=" + Math.random();
            var arrQuery = url.split("?");
            if (arrQuery[1] != undefined) {
                // 含查询字符串
                if (url.slice(-1) === "&") {
                    url = url + strQueryRandom;
                } else {
                    url = url + "&" + strQueryRandom;
                }
            } else {
                // 不含查询字符串
                url = url + "?" + strQueryRandom;
            }
            return url;
        }
    };
    module.exports = common;
});
