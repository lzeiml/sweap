// Module
var app = angular.module('app', ['ngRoute']);

// Router
app.config(function($routeProvider) {
   $routeProvider
      .when('/', {templateUrl: 'partials/home.html', controller: 'homeCtrl'})
      .when('/map', {templateUrl: 'partials/map.html', controller: 'mapCtrl'})
      .when('/users', {templateUrl: 'partials/users.html', controller: 'usersCtrl'})
      .when('/reports', {templateUrl: 'partials/reports.html', controller: 'reportsCtrl'})
});

// Controller ------------------------------------------------------------------
// Hauptcontroller (index)
app.controller('mainController', function() {

});

// Menüpunkt Home
app.controller('homeCtrl', function() {

});

// Menüpunkt Karte
app.controller('mapCtrl', function() {

});

// Menüppunkt Benutzer
app.controller('usersCtrl', function($scope, $http) {
   // User einfügen
   $scope.insertdata=function() {
      $http.post("php/insert.php", {'vorname':$scope.vorname, 'nachname':$scope.nachname, 'enabled':$scope.enabled})
      .then(function() {
         document.getElementById('vorname').value = "";
         document.getElementById('nachname').value = "";
         document.getElementById('enabled').value = "";

         $scope.displayUser();
      })
   }

   // User anzeigen
   $scope.displayUser=function() {
      $http.get("php/select.php")
      .then(function(response) {
         $scope.data=response.data;
      });
   }
   $scope.displayUser();

   // User löschen
   $scope.deleteUser=async function(UserID) {
      $http.post("php/delete.php", {'id':UserID})
      .then(function() {
         $scope.displayUser();
      });
   }

   // User ändern
   $scope.editUser=function(UserID, Vorname, Nachname, enabled, buttontype) {

   }

   // Änderungsformular anzeigen/verstecken
   $scope.hideForm=function(hide) {
      var form = document.getElementById("editForm");

      if (hide == true) {
         form.style.display = "none";
      } else {
         form.style.display = "block";
      }
   }
   $scope.hideForm(true);
});

// Menüpunkt Meldungen
app.controller('reportsCtrl', function() {

});

// Funktionen ------------------------------------------------------------------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
