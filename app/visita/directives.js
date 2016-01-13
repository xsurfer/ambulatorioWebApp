app.directive('visitaListPanel', function() {
  return {
        restrict: 'E',
        scope: {
          visita: '='
        },
        controller: 'visitaListPanelController',
        controllerAs: 'ctrl',
        //bindToController: true,
        templateUrl: 'app/visita/templates/visitaListPanel.html'
  }
});
