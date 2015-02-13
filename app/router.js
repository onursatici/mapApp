define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var HelloView = require("views/hello");
  var MapTestView = require("views/mapTest");
  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'hello': 'sayHello',
      'maptest': 'mapTest'
    },

    index: function() {
      console.log("Welcome to your / route.");
    },
    sayHello: function(){
      var helloView = new HelloView();
      console.log('in the route!');
      helloView.render();
    },
    mapTest: function(){
      var mapTestView = new MapTestView();
      mapTestView.render();
    }
  });

  module.exports = Router;
});
