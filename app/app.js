var app = angular.module('ambulatorioApp', ['ui.router', 'ncy-angular-breadcrumb', 'ui.bootstrap', 'ngAnimate']);

/*
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
    });
}]);
*/

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/anagrafica.html",
      controller: "anagraficaCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Home page'
      }
    })
    .state('anagrafica', {
      url: "/anagrafica",
      templateUrl: "partials/anagrafica/anagraficaSearch.html",
      controller: "anagraficaSearchCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Anagrafica Pazienti'
      }
    })
    .state('anagrafica.results', {
      url: "/results",
      templateUrl: "partials/anagrafica/anagraficaResults.html",
      controller: "anagraficaResultCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Risultati Ricerca'
      }
    })

    .state('anagrafica.addPaziente', {
      url: "/paziente",
      templateUrl: "partials/paziente/pazienteNewEdit.html",
      controller: "pazienteNewEditCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Nuovo Paziente'
      }
    })
    .state('paziente.list', {
      url: "/paziente/all",
      templateUrl: "partials/paziente/pazienteList.html",
      controller: "pazienteListCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Lista Pazienti'
      }
    })
    .state('paziente', {
      url: "/paziente/:pazienteId",
      templateUrl: "partials/paziente/pazienteDashboard.html",
      controller: "pazienteDashboardCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Paziente'
      }
    })
    .state('paziente.editPaziente', {
      url: "/edit",
      templateUrl: "partials/paziente/pazienteNewEdit.html",
      controller: "pazienteNewEditCtrl",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Modifica Dati Paziente'
      }
    })
    ;
});


app.controller('panelCtrl', function () {
  this.tab=1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
});
