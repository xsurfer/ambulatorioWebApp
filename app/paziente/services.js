paziente.service('PazienteService', ['urlAPI', '$http', function(urlAPI, $http) {

    this.getPaziente = function(name) {
        return $http.get(urlAPI + 'pazienti/' + name);
    };

    this.savePaziente = function(paziente) {
        return $http.post(urlAPI + 'pazienti', paziente);
    };

    this.searchPazienti = function(query) {
        config = { params: query };
        return $http.get(urlAPI + 'pazienti/', config);
    };

}]);