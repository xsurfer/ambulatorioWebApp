anagrafica.controller( 'AnagraficaSearchController', [ '$stateParams', '$state',
                                function ($stateParams, $state) {
  var vm = this;
  vm.panelHeadingText = 'Criteri di ricerca';
  vm.buttonText = 'Cerca';
  vm.addPazienteBtnLabel = 'Registra';
  vm.paziente = {};

  vm.search = function(paziente) {
    if (!paziente){
        console.log('Nessun criterio di ricerca impostato');
        return $state.go('anagrafica');
    }
    $state.go('anagrafica.search', paziente);
  };

  vm.cancel = function () {
    vm.paziente = {};
  };

}]);


anagrafica.controller('anagraficaResultController', [ 'PazienteService', 'MyService', '$stateParams', '$state',
                    function (PazienteService, MyService, $stateParams, $state) {
    var vm = this;
    vm.panelHeadingText = 'Risultati ricerca';
    vm.addPazienteBtnLabel = 'Registra';
    vm.buttonText = "bella";
    vm.search = true;
    vm.isNewPaziente=false;
    vm.pazienteRicercato = $stateParams;
    console.log('ricercato');
    console.log(vm.pazienteRicercato);
    vm.pazienti = [];

    PazienteService.search($stateParams).then(function(data){
        vm.pazienti = data;
    }, function(){
        console.log("An error occurred while retrieving paziente");
        vm.pazienti = [];
    });

    isSearchable= function (){
        var isSearchable = search
        return isSearchable;
    }

    isNoDataFound= function (){
        var isNoDataFound = !isSearchable() && (pazienti.length == 0);
        //console.log("isNoDataFound: " + isNoDataFound)
        return isNoDataFound;
    }

    openPaziente = function (paziente) {
        var params = {pazienteId: result.id};
        $state.go('PazienteDashboard', params);
    }

    vm.registraPaziente = function (paziente) {
        console.log("REGISTRA");
        console.log(vm.pazienteRicercato);
        $state.go('anagrafica.addPaziente', vm.pazienteRicercato);
    };

    columns = [
        {text:"ID",predicate:"id",sortable:true,dataType:"number"},
        {text:"Nome",predicate:"nome",sortable:true},
        {text:"Cognome",predicate:"cognome",sortable:true},
        {text:"Sesso",predicate:"sesso",sortable:true},
        {text:"Data di nascita",predicate:"data_nascita",sortable:true},
    ];

}]);


app.controller('ultimeRicerchePanelController', [ '$stateParams', function($stateParams) {
    var vm = this;

}]);