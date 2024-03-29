angular.module('starter.controllers', ['ionic'])
.constant('FORECASTIO_KEY', 'NTNlNjJiOTAyMDA5MzQwMjAwMDAwMDIzZEk2RFhYY1E3WllTUGNocmVrWEdK')
.controller('HomeCtrl', function($scope,$state,Weather,DataStore) {
    //read default settings into scope
    console.log('inside home');
    $scope.city  = DataStore.city;
    $scope.testvar = DataStore.testvar;
      
    var latitude  =  DataStore.latitude;
    var longitude = DataStore.longitude;

    //call getCurrentWeather method in factory ‘Weather’
    Weather.getCurrentWeather(latitude,longitude).then(function(resp) {
      $scope.current = resp.data;
      console.log('log');
      console.log('GOT CURRENT', $scope.current);

      //debugger;
    }, function(error) {
      alert('Unable to get current conditions');
      console.error(error);
    });

})
.controller('LocationsCtrl', function($scope,$state, Cities,DataStore) {
  $scope.cities = Cities.all();

  $scope.changeCity = function(cityId) {
    //get lat and longitude for seleted location
    var lat  = $scope.cities[cityId].lat; //latitude
    var lgn  = $scope.cities[cityId].lgn; //longitude
    var city = $scope.cities[cityId].name; //city name

    DataStore.setCity(city);
    DataStore.setLatitude(lat);
    DataStore.setLongitude(lgn);

    $state.go('tab.home');
  }
})
.controller('SettingsCtrl', function($scope) {
    //manages app settings
});