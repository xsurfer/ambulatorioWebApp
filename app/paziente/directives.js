app.directive('pazienteInfoPanel', function() {
  return {
        restrict: 'E',
        scope: {
          paziente: '='
        },
        controller: 'pazienteInfoPanelController',
        controllerAs: 'ctrl',
        //bindToController: true,
        templateUrl: 'app/paziente/templates/components/pazienteInfoPanel.html'
  }
});