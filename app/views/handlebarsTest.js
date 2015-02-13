define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars'
], function($,_,Backbone,Handlebars){
  var HandlebarsTestView = Backbone.View.extend({
    el: '#handlebarsTest',
    render: function(){
      var data = [
        {name : 'osman', age: '25'},
        {name : 'veli', age: '18'},
        {name : 'john', age: '30'}
      ];
      var templateScript = $('#handlebarsTest-template').html();
      console.log(templateScript.toString());
      var theTemplate = Handlebars.compile(templateScript);
      this.$el.append(theTemplate(data));
    }
  });
  return HandlebarsTestView;
});
