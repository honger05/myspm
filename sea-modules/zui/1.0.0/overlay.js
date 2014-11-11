define('zui/overlay',function(require,exports,module){

  var common = require("zui/common");

  var Overlay = function(){
    this.element = common.createElement("div", {
      styles: {
        display: "none",
        width: "100%",
        backgroundColor: "#000",
        opacity: 0.35,
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0
      }
    });
    document.body.appendChild(this.element);
  }

  module.exports = Overlay;

  Overlay.prototype.show = function(){
    this.element.style.display = "block"
  }

  Overlay.prototype.hide = function(){
    this.element.style.display = "none"
  }

});