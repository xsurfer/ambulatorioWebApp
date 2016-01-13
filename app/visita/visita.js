var visita = angular.module('visita', []);

paziente.config(function($stateProvider){

    $stateProvider.state('paziente.addVisita', {
      url: "/visita",
      templateUrl: "app/visita/templates/visitaNewEdit.html",
      controller: "visitaNewEditController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Nuova Visita'
      }
    })
    .state('paziente.visita', {
      url: "/visita/:visitaId",
      templateUrl: "app/visita/templates/visitaNewEdit.html",
      controller: "visitaNewEditController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Visita'
      }
    })
});