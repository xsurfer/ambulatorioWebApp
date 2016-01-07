app.controller('pazienteDetailCtrl', function ($scope, $modal, $filter, Data) {
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

    $scope.search = function (p,size) {
        console.log(p);
        var modalInstance = $modal.open({
          templateUrl: 'partials/pazienteSearch.html',
          controller: 'pazienteSearchCtrl',
          size: size,
          resolve: {
            item: function () {
              return p;
            }
          }
        });
        modalInstance.result.then(function(result_pazienti) {
            $scope.pazienti = result_pazienti;
            $scope.pazienti = $filter('orderBy')($scope.pazienti, 'id', 'reverse');
        });

    };

    $scope.open = function (p,size) {
        console.log(p);
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