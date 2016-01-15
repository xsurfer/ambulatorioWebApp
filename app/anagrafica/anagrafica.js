var anagrafica = angular.module('anagrafica', ['paziente']);


anagrafica.config(function($stateProvider){

    $stateProvider.state('anagrafica', {
      url: "/anagrafica",
      templateUrl: "app/anagrafica/templates/anagraficaSearch.html",
      controller: "AnagraficaSearchController",
      controllerAs: 'anagrafica',
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Anagrafica Pazienti'
      }
    })
    .state('anagrafica.search', {
      url: "/search?nome&cognome&sesso",
      templateUrl: "app/anagrafica/templates/anagraficaResults.html",
      controller: "anagraficaResultController",
      controllerAs: 'resultCtrl',
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Risultati Ricerca'
      }
    });

});

