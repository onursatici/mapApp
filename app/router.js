define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var HelloView = require("views/hello");
  var HandlebarsTestView = require("views/handlebarsTest");
  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'hello': 'sayHello',
      'maptest': 'mapTest',
      'handlebarstest': 'handlebarsTest'
    },

    index: function() {
      console.log("Welcome to your / route.");
    },
    sayHello: function(){
      var helloView = new HelloView();
      console.log('in the route!');
      helloView.render();
    },
    handlebarsTest: function(){
      var handlebarsTestView = new HandlebarsTestView();
      handlebarsTestView.render();
    }
  });

  module.exports = Router;
});
