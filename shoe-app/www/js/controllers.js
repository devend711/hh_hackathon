angular.module('starter.controllers', ['ionic'])
.constant('FORECASTIO_KEY', 'NTNlNjJiOTAyMDA5MzQwMjAwMDAwMDIzZEk2RFhYY1E3WllTUGNocmVrWEdK')
.controller('HomeCtrl', function($scope,$state,Weather,DataStore,ShoeGetter) {
    //read default settings into scope
    $scope.testjson = ShoeGetter.NRandomShoes(4);
})
.controller('LocationsCtrl', function($scope,$state, Cities,DataStore,ShoeGetter) {
  $scope.cities = Cities.all();
  $scope.shoe = ShoeGetter.NRandomImages(4)[1];

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