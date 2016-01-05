app.controller('pazientiCtrl', function ($scope, $modal, $filter, Data) {
    $scope.paziente = {};

    Data.get('pazienti').then(function(data){
        $scope.pazienti = data;
        console.log(data);
    });

    $scope.deletePaziente = function(paziente){
        if(confirm("Are you sure to remove the paziente")){
            Data.delete("pazienti/"+paziente.id).then(function(result){
                $scope.pazienti = _.without($scope.pazienti, _.findWhere($scope.pazienti, {id:paziente.id}));
            });
        }
    };

    $scope.open = function (p,size) {
        var modalInstance = $modal.open({
          templateUrl: 'partials/productEdit.html',
          controller: 'pazienteEditCtrl',
          size: size,
          resolve: {
            item: function () {
              return p;
            }
          }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.pazienti.push(selectedObject);
                $scope.pazienti = $filter('orderBy')($scope.pazienti, 'id', 'reverse');
            }else if(selectedObject.save == "update"){
                p.nome = selectedObject.nome;
                p.cognome = selectedObject.cognome;
            }
        });
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

});


app.controller('pazienteEditCtrl', function ($scope, $modalInstance, item, Data) {

  $scope.paziente = angular.copy(item);
        
        $scope.cancel = function () {
            $modalInstance.dismiss('Close');
        };
        $scope.title = (item.id > 0) ? 'Modifica Paziente' : 'Aggiungi Paziente';
        $scope.buttonText = (item.id > 0) ? 'Aggiorna Paziente' : 'Aggiungi nuovo Paziente';

        var original = item;
        $scope.isClean = function() {
            return angular.equals(original, $scope.paziente);
        }
        $scope.savePaziente = function (paziente) {
            paziente.uid = $scope.uid;
            if(paziente.id > 0){
                Data.put('pazienti/'+paziente.id, paziente).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(paziente);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }else{
                //paziente.status = 'Active';
                Data.post('pazienti', paziente).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(paziente);
                        x.save = 'insert';
                        x.id = result.data;
                        $modalInstance.close(x);
                    }else{
                        console.log(result);
                    }
                });
            }
        };
});
