var paziente = angular.module('paziente', []);


paziente.config(function($stateProvider){

    $stateProvider.state('anagrafica.addPaziente', {
      url: "/paziente",
      templateUrl: "app/paziente/templates/pazienteNewEdit.html",
      controller: "pazienteNewEditController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Nuovo Paziente'
      }
    })
    .state('paziente.list', {
      url: "/paziente/all",
      templateUrl: "app/paziente/templates/pazienteList.html",
      controller: "pazienteListController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Lista Pazienti'
      }
    })
    .state('paziente', {
      url: "/paziente/:pazienteId",
      templateUrl: "app/paziente/templates/pazienteDashboard.html",
      controller: "pazienteDashboardController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Paziente'
      }
    })
    .state('paziente.editPaziente', {
      url: "/edit",
      templateUrl: "app/paziente/templates/pazienteNewEdit.html",
      controller: "pazienteNewEditController",
      reloadOnSearch: false,
      ncyBreadcrumb: {
        label: 'Modifica Dati Paziente'
      }
    });

});

