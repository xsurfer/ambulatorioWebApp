var app = angular.module('ambulatorioApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'home',
      templateUrl: 'partials/anagrafica.html',
      controller: 'anagraficaCtrl',
      reloadOnSearch: false
    })
    .when('/anagrafica', {
      title: 'Anagrafica',
      templateUrl: 'partials/anagrafica.html',
      controller: 'anagraficaCtrl',
      reloadOnSearch: false
    })


    .when('/paziente', {
      title: 'PazienteNew',
      templateUrl: 'partials/paziente/pazienteNewEdit.html',
      controller: 'pazienteNewEditCtrl',
      reloadOnSearch: false
    })
    .when('/paziente/all', {
      title: 'PazienteList',
      templateUrl: 'partials/paziente/pazienteList.html',
      controller: 'pazienteListCtrl'
    })
    .when('/paziente/:pazienteId', {
      title: 'PazienteDashboard',
      templateUrl: 'partials/paziente/pazienteDashboard.html',
      controller: 'pazienteDashboardCtrl'
    })
    .when('/paziente/:pazienteId/edit', {
      title: 'PazienteEdit',
      templateUrl: 'partials/paziente/pazienteNewEdit.html',
      controller: 'pazienteNewEditCtrl'
    })


    .when('/paziente/:pazienteId/visita', {
      title: 'Visita List',
      templateUrl: 'partials/visitaList.html',
      controller: 'pazienteDetailCtrl'
    })

    .when('/calendario', {
      title: 'Calendario',
      templateUrl: 'partials/calendario.html',
      controller: 'calendarioCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);


app.controller('panelCtrl', function () {
  this.tab=1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
});