app.controller('visitaNewEditController', [ '$scope', '$filter', '$stateParams', 'Data', 'MyService',
                                function ($scope, $filter, $stateParams, Data, MyService) {
    $scope.panelHeadingText = 'Visita';

    $scope.initVisita = function(){
        $scope.visita = {};
        $scope.visita.data_visita = new Date();
    };
    $scope.initVisita();

    $scope.cancel = function () {
        $scope.initVisita();
    };


    var pazienteId = $stateParams.pazienteId;

    if(pazienteId){
        $scope.registerBtn = 'Salva';

        Data.get('pazienti/' + pazienteId).then(function (result) {
            if(result.status != 'error'){
                console.log(result);
                $scope.paziente = result;
                /*$scope.panelHeadingText = 'Risultati ricerca'
                $scope.search = false;
                $location.search(paziente);*/
            }else{
                //console.log(result);
            }
        });
    } else {
        $scope.panelHeadingText = 'Registra Paziente';
        $scope.registerBtn = 'Aggiungi';

        $scope.paziente = {};
        $scope.paziente = MyService.get();
        /*$scope.paziente = {
            nome : $stateParams.nome,
            cognome : $stateParams.cognome,
            sesso : $stateParams.sesso,
            data_nascita : $stateParams.data_nascita
        };*/
    }

    $scope.registerPaziente = function (paziente) {
        console.log('done!');
        var tmpDataNascita = $filter('date')($scope.paziente.data_nascita, 'yyyy-MM-dd');
        console.log(tmpDataNascita);
        $scope.paziente.data_nascita = tmpDataNascita;
        if(paziente.id > 0){
            console.log('doing PUT');
            Data.put('pazienti/'+paziente.id, paziente).then(function (result) {
                if(result.status != 'error'){
                    console.log(result);
                    var params = {pazienteId: result.id};
                    $state.go('PazienteDashboard', params);
                }else{
                    console.log(result);
                }
            });
        }else{
            console.log('doing POST!');
            Data.post('pazienti', paziente).then(function (result) {
                if(result.status != 'error'){
                    console.log(result);
                    var params = {pazienteId: result.id};
                    $state.go('PazienteDashboard', params);
                }else{
                    console.log(result);
                }
            });
        }
    };

    $scope.evaluateBMI = function(){
        console.log('evaluatng');
        console.log($scope.visita.ril_antropometrico.peso);
        console.log($scope.visita.ril_antropometrico.altezza);

        if($scope.visita.ril_antropometrico.peso && $scope.visita.ril_antropometrico.peso > 0){
            console.log('check1');
            if($scope.visita.ril_antropometrico.altezza && $scope.visita.ril_antropometrico.altezza > 0){
                console.log('check2');
                $scope.visita.ril_antropometrico.bmi = $scope.visita.ril_antropometrico.peso / ($scope.visita.ril_antropometrico.altezza * $scope.visita.ril_antropometrico.altezza);
                console.log($scope.visita.ril_antropometrico.bmi);
            }
        }
    }


}]);

app.controller('visitaListPanelController', [ '$http', '$scope', '$filter', '$stateParams', 'Data', 'MyService',
                                function ($http, $scope, $filter, $stateParams, Data, MyService) {
    visitaListPanelCtrl = this;
    $scope.visite = [];
    pazienteId = $stateParams.pazienteId;
    paziente = {};

    console.log('PazienteId: '+ pazienteId);

    Data.get('pazienti/' + pazienteId).then(function (result) {
            if(result.status != 'error'){
                paziente = result;
                console.log('eeccolo');
                console.log(paziente);
                getVisite(paziente);
                console.log('trovate');
                console.log($scope.visite);
                /*$scope.panelHeadingText = 'Risultati ricerca'
                $scope.search = false;
                $location.search(paziente);*/
            }else{
                console.log(result);
            }
    });

    getVisite = function(paziente){
        $http.get(paziente.visite_url)
            .then( function successCallback(response){
                if(response.status != 'error'){
                    //console.log(response.data);
                    $scope.visite = response.data;
                }
            }, function errorCallback(response) {
                console.log(response);
            });
    }

    $scope.columns = [
                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
                    {text:"Data Visita",predicate:"data_visita",sortable:true},
                ];


}]);