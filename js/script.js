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

app.controller('usersCtrl', function($scope, $http) {
   $scope.insertdata=function() {
      $http.post("php/insert.php", {'vorname':$scope.vorname, 'nachname':$scope.nachname, 'enabled':$scope.enabled});

      document.getElementById('vorname').value = "";
      document.getElementById('nachname').value = "";
      document.getElementById('enabled').value = "";

      $scope.displayUser();
   }

   $scope.displayUser=function() {
      $http.get("php/select.php")
      .then(function(response) {
         $scope.data=response.data;
      });
   }

   $scope.displayUser();
});

app.controller('reportsCtrl', function() {

});
