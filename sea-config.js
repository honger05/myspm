seajs.config({
  base: '../sea-modules/',
  alias: {
    'jquery': 'jquery/jquery/1.10.1/jquery.js',
    "util": '../../util/1.0.0/util.js'
  },
  paths: {
    'bui': 'bui/1.0.1'
    //'bui': 'bui/1.0.0/dist'
  },
  map : [
    [/bui\/1.0.1\/(.*).js/,'bui/1.0.1/$1-min.js'] //['.js', '-min.js'] ,仅bui/1.0.1目录下使用-min.js,
    //[/bui\/1.0.0\/dist\/(.*).js/,'bui/1.0.0/dist/bui.js']
  ]
});