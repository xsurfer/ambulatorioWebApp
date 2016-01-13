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
      controllerAs: 'anagrafica',
      resolve: {
            pazienti: ['$stateParams', 'PazienteService',
                function($stateParams, PazienteService) {
                    console.log($stateParams);
                    return PazienteService.searchPazienti($stateParams);
            }],
        },
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Risultati Ricerca'
      }
    });

});

