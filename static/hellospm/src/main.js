define(function(require){

  var $ = require('jquery');
  var Hello = require('./hello');

  $(document).keypress(function (ev) {
    if (ev.which == 32) {
      new Hello();
    }
  })
});