app.factory('API', ['urlAPI', '$http', '$q', function (urlAPI, $http, $q) {
    return {
        get: function(uri, config) {
            return $http.get(urlAPI + uri, config)
                .then(function(response) {
                    return response.data;
                }
            );
        }
    };
}]);


paziente.factory('PazienteService', ['API', '$http', 'Paziente', function (API, $http, Paziente) {
    var service = 'pazienti/';
    return {
        get: function(pazienteId){
            console.log("Querying for:" + service + pazienteId + '/');
            return API.get( service + pazienteId + '/').then(Paziente.apiResponseTransformer);
        },

        search: function(query){
            config = { params: query };
            return API.get( service, config).then(Paziente.apiResponseTransformer);
        }
    };
}]);
