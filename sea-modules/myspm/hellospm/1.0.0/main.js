define("myspm/hellospm/1.0.0/main",["jquery","./hello","util","./handle-text"],function(a){var b=a("jquery"),c=a("./hello");b(document).keypress(function(a){32==a.which&&new c})}),define("myspm/hellospm/1.0.0/hello",["jquery","util","myspm/hellospm/1.0.0/handle-text"],function(a,b,c){function d(){this.render(),this.bindAction(),console.log("new Hello() called.")}var e=a("jquery"),f=a("util").random,g=a("myspm/hellospm/1.0.0/handle-text");d.prototype.render=function(){this.el=e('<div style="position:fixed;left:'+f(0,70)+"%;"+"top:"+f(10,80)+'%;">'+g("Hello SPM !")+"</div>").appendTo("body")},d.prototype.bindAction=function(){var a=this.el;setTimeout(function(){a.fadeOut()},f(500,5e3))},c.exports=d}),define("myspm/hellospm/1.0.0/handle-text",["jquery","util"],function(a,b,c){function d(a){for(var b=e(30,70),c=e(50,120),d="",f=0,g=a.length;g>f;f++)d+='<span style="font-size:'+e(b,c)+'px;">'+a[f]+"</span>";return d}a("jquery");var e=a("util").random;c.exports=d});
