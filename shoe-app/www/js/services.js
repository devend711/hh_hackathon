'use strict';

var forecastioWeather = ['$q', '$resource', '$http', 'FORECASTIO_KEY', 
  function($q, $resource, $http, FORECASTIO_KEY) {
  var url = 'https://www.apitite.net/api/hhbrown/bystyle/' + FORECASTIO_KEY + '/';

  var weatherResource = $resource(url, {
    callback: 'JSON_CALLBACK',
  }, {
    get: {
      method: 'JSONP'
    }
  });

  return {
    //getAtLocation: function(lat, lng) {
    // getCurrentWeather: function(lat, lng) {
    //   //return $http.jsonp(url + lat + ',' + lng + '?callback=JSON_CALLBACK');
    //   //return $http.jsonp(url + '?callback=JSON_CALLBACK');
    //   //return '50';
    // }
    readInJson: function() {
      return $.getJSON('style_casual.json');
    }
  }
}];

angular.module('starter.services', ['ngResource'])
.factory('Cities', function() {
var cities = [
    { id: 0, name: 'Miami', lat:25.7877 , lgn: 80.2241 },
    { id: 1, name: 'New York City' ,lat: 40.7127 , lgn: 74.0059 },
    { id: 2, name: 'London' ,lat:51.5072 , lgn: 1.1275 },
    { id: 3, name: 'Los Angeles' ,lat: 34.0500 , lgn: 118.2500 },
    { id: 4, name: 'Dallas' ,lat: 32.7758 , lgn:96.7967  },
    { id: 5, name: 'Frankfurt' ,lat:50.1117 , lgn: 8.6858 },
    { id: 6, name: 'New Delhi' ,lat:28.6100 , lgn: 77.2300 }
  ];

  return {
    all: function() {
      return cities;
    },
    get: function(cityId) {
      // Simple index lookup
      return cities[cityId];
    }
  }
}).
factory('DataStore', function() {
    //create datastore with default values
    var DataStore = {
        city:       'Miami',
        latitude:   25.7877,
        longitude:  80.2241,
        testvar: 'hi' };

    DataStore.setCity = function (value) {
       DataStore.city = value;
    };

    DataStore.setLatitude = function (value) {
       DataStore.longitude = value;
    };

    DataStore.setLongitude = function (value) {
       DataStore.longitude = value;
    };

    return DataStore;
}).
factory('ShoeGetter', function() {
  var ShoeInfo = {
    data: $.getJSON('./stored_json/style_casual.json')
  };

  ShoeInfo.addAllPics = function() {
    var get = function(){
      $.getJSON('style_casual.json', function(data){
        $.each(data, function(index, hash) {
          //console.log(hash.image_link);
          var img = $('<img class="shoe-pic" src=' + hash.image_link + '>');
          img.appendTo('#imagediv');
        });
      });
    }
    return get();
  }

  ShoeInfo.NRandomShoes = function(n) {
    var get = function(){
      $.getJSON('style_casual.json', function(data){
        var randoms = data.sort(function(){return Math.round(Math.random())-0.5}).slice(0,n);
        $.each(randoms, function(index, hash) {
          var img = $('<img class="shoe-pic" src=' + hash.image_link + '>');
          img.appendTo('#imagediv');
        });
      });
    }
    return get();
  }

  return ShoeInfo;
})
.factory('Weather', forecastioWeather);
