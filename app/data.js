app.factory("Data", ['$http', '$location',
    function ($http, $q, $location) {

        var serviceBase = 'http://ambulatorio.localhost:8000/';

        var obj = {};

        obj.get = function (q, object) {
            var config = {}
            //console.log(object);
            if (object!=null){
                config = { params: object };
                //console.log(config);
            }

            return $http.get(serviceBase + q + '/', config).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q + '/', object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q + '/', object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q + '/').then(function (results) {
                return results.data;
            });
        };
        return obj;
}]);
