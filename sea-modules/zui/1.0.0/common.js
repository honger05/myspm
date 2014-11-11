define('zui/common',function(require,exports,module){

  var common = {
    //创建元素
    createElement: function (tagName, attr) {
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
                  element.style.filter = "alpha(opacity=" + (attr[keyAttr][keyStyle] * 100) + ")";
                }
              }
            } else {
              if (keyAttr === "class") {
                keyAttr = "className";
              }
              element[keyAttr] = attr[keyAttr]
              attr["class"];
            }

          }
        }
      }
      return element;
    },
    //url地址后加随机数
    queryRandom: function(url){
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

  }

  module.exports = common;
});