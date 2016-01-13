app.controller('pazienteNewEditController', [ '$scope', '$filter', '$state', '$stateParams', 'Data', 'MyService',
                                function ($scope, $filter, $state, $stateParams, Data, MyService) {

    var pazienteId = $stateParams.pazienteId;

    if(pazienteId){
        $scope.panelHeadingText = 'Modifica Paziente';
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
                    $state.go('paziente', params);
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
                    $state.go('paziente', params);
                }else{
                    console.log(result);
                }
            });
        }
    };

    $scope.cancel = function () {
        $scope.paziente = {};
    };
}]);

app.controller('pazienteDashboardController', function ($scope, $filter, $stateParams, $location, Data) {
    $scope.panelHeadingText = 'Dashboard';
    $scope.pazienteId = $stateParams.pazienteId;
    Data.get('pazienti/' + $scope.pazienteId).then(function (result) {
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

});


app.controller('pazienteInfoPanelController', function($scope, $stateParams, Data) {
    $scope.pazienteId = $stateParams.pazienteId;
    Data.get('pazienti/' + $scope.pazienteId).then(function (result) {
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

});