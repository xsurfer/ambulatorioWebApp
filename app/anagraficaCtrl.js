app.controller('anagraficaCtrl', function ($scope, $location, $routeParams, $filter, Data) {
  $scope.panelHeadingText = 'Criteri di ricerca'
  $scope.buttonText = 'Cerca';
  $scope.addPazienteBtnLabel = 'Registra'
  $scope.search = true;
  $scope.isNewPaziente=false;
  $scope.paziente = {
    nome : $routeParams.nome,
    cognome : $routeParams.cognome,
    sesso : $routeParams.sesso,
    data_nascita : $routeParams.data_nascita
  };


  $scope.pazienti = {};
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


  //$scope.title = (item.id > 0) ? 'Modifica Paziente' : 'Aggiungi Paziente';
  //$scope.buttonText = (item.id > 0) ? 'Aggiorna Paziente' : 'Aggiungi nuovo Paziente';

  //var original = item;
  //$scope.isClean = function() {
  //  return angular.equals(original, $scope.paziente);
  //}

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

  $scope.searchPaziente = function (paziente) {
    //console.log('---');
    //console.log(paziente);
    //console.log($.param(paziente));
    //paziente.uid = $scope.uid;

    Data.get('pazienti', paziente ).then(function (result) {
        if(result.status != 'error'){
            //console.log(result);
            $scope.pazienti = result;
            $scope.panelHeadingText = 'Risultati ricerca'
            $scope.search = false;
            $location.search(paziente);
        }else{
            //console.log(result);
        }
    });
  };

  $scope.registraPaziente = function (paziente) {
    //console.log('---');
    //console.log(paziente);
    //console.log($.param(paziente));
    $location.path('/paziente/').search(paziente);
  };

  $scope.openPaziente = function (paziente) {
    $location.path('/paziente/' + paziente.id).search('').replace();
  }

  $scope.cancel = function () {
    $scope.paziente = {};
  };

});