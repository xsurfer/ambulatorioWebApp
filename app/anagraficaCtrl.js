
app.controller( 'anagraficaSearchCtrl', [ 'MyService', '$scope', '$stateParams', '$state',
                                function (MyService, $scope, $stateParams, $state) {
  $scope.panelHeadingText = 'Criteri di ricerca';
  $scope.buttonText = 'Cerca';
  $scope.addPazienteBtnLabel = 'Registra';
  $scope.paziente = {};

  $scope.setPazienteToSearch = function(curPaziente) {
        MyService.set(curPaziente);
        $state.go('anagrafica.results');
    };

  $scope.cancel = function () {
    $scope.paziente = {};
  };

}]);

app.controller('anagraficaResultCtrl', [ 'MyService', '$scope', '$stateParams', '$state', 'Data',
                                function (MyService, $scope, $stateParams, $state, Data) {
  $scope.panelHeadingText = 'Risultati ricerca';
  $scope.search = true;
  $scope.isNewPaziente=false;
  $scope.pazienti = [];
  paziente = MyService.get();

  Data.get('pazienti', paziente ).then(function (result) {
        if(result.status != 'error'){
            //console.log(result);
            $scope.pazienti = result;
            $scope.search = false;
        }else{
            //console.log(result);
        }
    });

  $scope.isSearchable= function (){
    var isSearchable = $scope.search
    //console.log("isSearchable: " + isSearchable)
    return isSearchable;
  }

  $scope.isNoDataFound= function (){
    var isNoDataFound = !$scope.isSearchable() && ($scope.pazienti.length == 0);
    //console.log("isNoDataFound: " + isNoDataFound)
    return isNoDataFound;
  }

  $scope.openPaziente = function (paziente) {
    //$location.path('/paziente/' + paziente.id).search('').replace();
    var params = {pazienteId: result.id};
    $state.go('PazienteDashboard', params);
  }

  $scope.registraPaziente = function (paziente) {
//    console.log('---');
//    console.log(paziente);
//    console.log($.param(paziente));
    $state.go('anagrafica.addPaziente');
  };
  $scope.columns = [
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