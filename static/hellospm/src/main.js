define(function(require){

  var $ = require('jquery');

  window.$ = window.jQuery = $;

  var Hello = require('./hello');

  $(document).keypress(function (ev) {
    if (ev.which == 32) {
      new Hello();
    }
  })

  //测试zui
  var Overlay = require('./zui/overlay');
  var o = new Overlay();
  o.show();

  //测试bui
  var Overlay = require('bui/overlay');
  var Message = Overlay.Message;
  Message.Alert('这是拿来测试bui的！',function(){
    o.hide();
  },'info');

});