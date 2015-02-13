define([
  'jquery',
  'underscore',
  'backbone'
], function($,_,Backbone){
  var HelloView = Backbone.View.extend({
    el: '#hello',
    render: function(){
      this.$el.append('<h1> HELLO </h1>');
    }
  });
  return HelloView;
});
