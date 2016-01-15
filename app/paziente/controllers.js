app.controller('pazienteNewEditController', [ '$filter', '$state', '$stateParams', 'PazienteService',
                                function ($filter, $state, $stateParams, PazienteService) {
    var vm = this;
    vm.pazienteId = $stateParams.pazienteId;

    if(vm.pazienteId){
        vm.panelHeadingText = 'Modifica Paziente';
        vm.registerBtn = 'Salva';

        PazienteService.get(vm.pazienteId).then(function(data){
            vm.paziente = data;
            }, function(){
                vm.paziente = {};
                console.log("An error occurred while retrieving paziente");
            }
        );
    } else {
        vm.panelHeadingText = 'Registra Paziente';
        vm.registerBtn = 'Aggiungi';
        vm.paziente = $stateParams;
    }

    vm.registerPaziente = function (paziente) {
        var tmpDataNascita = $filter('date')($scope.paziente.data_nascita, 'yyyy-MM-dd');
        vm.paziente.data_nascita = tmpDataNascita;
        if(vm.paziente.id > 0){
            // DO UPDATE
        }else{
            // DO INSERT
        }
    };

    vm.cancel = function () {
        vm.paziente = {};
    };
}]);


app.controller('pazienteDashboardController', ['$stateParams', 'PazienteService', function ($stateParams, PazienteService) {
    var vm = this;

}]);


app.controller('pazientePanelController', [ '$stateParams', 'PazienteService', function($stateParams, PazienteService) {
    var vm = this;

    vm.pazienteId = $stateParams.pazienteId;
    vm.paziente = {};

    PazienteService.get(vm.pazienteId).then(function(data){
        vm.paziente = data;
    }, function(){
        vm.paziente = {};
        console.log("An error occurred while retrieving paziente");
    });

}]);


app.controller('esenzioniPanelController', [ '$stateParams', 'PazienteService', function($stateParams, PazienteService) {
    var vm = this;

    vm.pazienteId = $stateParams.pazienteId;
    vm.esenzioni = [];


}]);