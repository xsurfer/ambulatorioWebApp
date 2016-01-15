anagrafica.directive('ultimeRicerchePanel', function() {
  return {
        restrict: 'E',
        scope: {
          paziente: '='
        },
        controller: 'ultimeRicerchePanelController',
        controllerAs: 'ultimeRicercheCtrl',
        //bindToController: true,
        templateUrl: 'app/anagrafica/templates/components/ultimeRicerchePanel.html'
  }
});