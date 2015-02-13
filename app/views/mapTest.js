define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var MapTestView = Backbone.View.extend({
    el: '#map-canvas',
    render: function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-XhouAasci8Zdx6hMxNOTwIXhPfQ7K80";
      $('head').append(script);
      var logicString = "function initialize() {var mapOptions = {center: {lat: -34.397,lng: 150.644},zoom: 8};var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);}google.maps.event.addDomListener(window, 'load', initialize);";
      $('document').ready(function() {
        $('#mapLogic').append(logicString);
      });
    }
  });
  return MapTestView;
});
