// Module
var app = angular.module('app', ['ngRoute', 'uiGmapgoogle-maps']);

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
app.controller('mapCtrl', function($scope, $http) {
   $scope.map = { center: { latitude: 47.5162, longitude: 14.5501 }, zoom: 7 };

   // Marker anzeigen
   $scope.displayMarkers=function() {
      $http.get("php/mapcoordinatesSelect.php")
      .then(function(response) {
         $scope.data=response.data;
      });
   }
   $scope.displayMarkers();
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
   $scope.fillEditForm=function(UserID, Vorname, Nachname, enabled) {
      // Formular mit Werten des Benutzers befüllen
      $scope.editID=UserID;
      $scope.editVorname=Vorname;
      $scope.editNachname=Nachname;
      $scope.editEnabled=enabled;
   }

   // Änderungsformular anzeigen/verstecken
   $scope.hideEditForm=function(hide) {
      var form = document.getElementById("editForm");

      if (hide == true) {
         form.style.display = "none";
      } else {
         form.style.display = "block";
      }
   }
   $scope.hideEditForm(true);

   $scope.saveUser=function() {
      $http.post("php/update.php", {'id':$scope.editID, 'vorname':$scope.editVorname, 'nachname':$scope.editNachname, 'enabled':$scope.editEnabled})
      .then(function () {
         $scope.displayUser();
      });
   }
});

// Menüpunkt Meldungen
app.controller('reportsCtrl', function() {

});

// Funktionen ------------------------------------------------------------------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
