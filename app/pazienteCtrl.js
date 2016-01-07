app.controller('pazienteNewEditCtrl', function ($scope, $filter, $routeParams, $location, Data) {

    var pazienteId = $routeParams.pazienteId;

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
        $scope.paziente = {
            nome : $routeParams.nome,
            cognome : $routeParams.cognome,
            sesso : $routeParams.sesso,
            data_nascita : $routeParams.data_nascita
        };
    }

    /*else {
        $scope.panelHeadingText = 'Modifica paziente';
        $scope.paziente = $scope.paziente;
    }*/

    $scope.registerPaziente = function (paziente) {
        console.log('done!');
        //paziente.uid = $scope.uid;
        if(paziente.id > 0){
            Data.put('pazienti/'+paziente.id, paziente).then(function (result) {
                if(result.status != 'error'){
                    console.log(result);
                    var pazienteId = result.id
                    $location.path('/paziente/' + pazienteId);
                }else{
                    console.log(result);
                }
            });
        }else{
            console.log('doing POST!');
            var tmpDataNascita = $filter('date')($scope.paziente.data_nascita, 'yyyy-MM-dd');
            console.log(tmpDataNascita);
            $scope.paziente.data_nascita = tmpDataNascita;

            Data.post('pazienti', paziente).then(function (result) {
                if(result.status != 'error'){
                    console.log(result);
                    var pazienteId = result.id
                    $location.path('/paziente/' + pazienteId);
                }else{
                    console.log(result);
                }
            });
        }
    };

    $scope.cancel = function () {
        $scope.paziente = {};
    };
});

app.controller('pazienteDashboardCtrl', function ($scope, $filter, $routeParams, $location, Data) {
    $scope.panelHeadingText = 'Dashboard';
    $scope.pazienteId = $routeParams.pazienteId;
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


app.controller('pazienteInfoPanelCtrl', function($scope, $routeParams, Data) {
    $scope.pazienteId = $routeParams.pazienteId;
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