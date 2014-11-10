define(function(require){

  var $ = require('jquery');

  window.$ = window.jQuery = $;

  var Hello = require('./hello');

  $(document).keypress(function (ev) {
    if (ev.which == 32) {
      new Hello();
    }
  })


  var Overlay = require('bui/overlay');
  var Grid = require('bui/grid');
  var Data = require('bui/data');

  var Message = Overlay.Message;

  Message.Alert('这只是简单的提示信息',function(){

  },'info');

});