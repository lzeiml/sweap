// Module
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
   $routeProvider
      .when('/', {templateUrl: 'partials/home.html', controller: 'homeCtrl'})
      .when('/map', {templateUrl: 'partials/map.html', controller: 'mapCtrl'})
      .when('/users', {templateUrl: 'partials/users.html', controller: 'usersCtrl'})
      .when('/reports', {templateUrl: 'partials/reports.html', controller: 'reportsCtrl'})
});

// Controllers
app.controller('mainController', function() {

});

app.controller('homeCtrl', function() {

});

app.controller('mapCtrl', function() {

});

app.controller('usersCtrl', function() {

});

app.controller('reportsCtrl', function() {

});
