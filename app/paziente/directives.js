paziente.directive('pazientePanel', function() {
  return {
        restrict: 'E',
        scope: {
          paziente: '='
        },
        controller: 'pazientePanelController',
        controllerAs: 'pazientePanelCtrl',
        //bindToController: true,
        templateUrl: 'app/paziente/templates/components/pazientePanel.html'
  }
});

paziente.directive('esenzioniPanel', function() {
  return {
        restrict: 'E',
        scope: {
          paziente: '='
        },
        controller: 'esenzioniPanelController',
        controllerAs: 'esenzioniPanelController',
        //bindToController: true,
        templateUrl: 'app/paziente/templates/components/esenzioniPanel.html'
  }
});