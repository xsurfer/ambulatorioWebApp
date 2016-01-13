anagrafica.controller( 'AnagraficaSearchController', [ 'MyService', '$stateParams', '$state',
                                function (MyService, $stateParams, $state) {
  var vm = this;
  vm.panelHeadingText = 'Criteri di ricerca';
  vm.buttonText = 'Cerca';
  vm.addPazienteBtnLabel = 'Registra';
  vm.paziente = {};

  /*setPazienteToSearch = function(curPaziente) {
        MyService.set(curPaziente);
        $state.go('anagrafica.search');
    };
    */

  vm.setPazienteToSearch = function(paziente) {
    if (!paziente){
        console.log('uff');
        return $state.go('anagrafica');
    }
    console.log(paziente);
    $state.go('anagrafica.search', paziente);
  };


  vm.cancel = function () {
    vm.paziente = {};
  };

}]);


anagrafica.controller('anagraficaResultController', [ 'PazienteService', 'MyService', '$stateParams', '$state', 'pazienti',
                    function (PazienteService, MyService, $stateParams, $state, pazienti) {
  var vm = this;

  vm.panelHeadingText = 'Risultati ricerca';
  vm.addPazienteBtnLabel = 'Registra';
  vm.buttonText = "bella";
  vm.search = true;
  vm.isNewPaziente=false;
  vm.pazienti = pazienti.data;

  isSearchable= function (){
    var isSearchable = search
    //console.log("isSearchable: " + isSearchable)
    return isSearchable;
  }

  isNoDataFound= function (){
    var isNoDataFound = !isSearchable() && (pazienti.length == 0);
    //console.log("isNoDataFound: " + isNoDataFound)
    return isNoDataFound;
  }

  openPaziente = function (paziente) {
    //$location.path('/paziente/' + paziente.id).search('').replace();
    var params = {pazienteId: result.id};
    $state.go('PazienteDashboard', params);
  }

  registraPaziente = function (paziente) {
    $state.go('anagrafica.addPaziente');
  };

  columns = [
                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
                    {text:"Nome",predicate:"nome",sortable:true},
                    {text:"Cognome",predicate:"cognome",sortable:true},
                    {text:"Sesso",predicate:"sesso",sortable:true},
                    {text:"Data di nascita",predicate:"data_nascita",sortable:true},
//                    {text:"Stock",predicate:"stock",sortable:true},
//                    {text:"Packing",predicate:"packing",reverse:true,sortable:true,dataType:"number"},
//                    {text:"Description",predicate:"description",sortable:true},
//                    {text:"Status",predicate:"status",sortable:true},
//                    {text:"Action",predicate:"",sortable:false}
                ];

}]);