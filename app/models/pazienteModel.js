app.factory('Paziente', ['$http', function($http) {

    var serviceBase = 'http://ambulatorio.localhost:8000/';

    function Paziente(pazienteData) {
        if (pazienteData) {
            this.setData(pazienteData):
        }
        // Some other initializations related to book
    };
    Paziente.prototype = {
        setData: function(pazienteData) {
            angular.extend(this, pazienteData);
        },
        load: function(id) {
            var scope = this;
            $http.get(serviceBase + id).success(function(pazienteData) {
                scope.setData(pazienteData);
            });
        },
        delete: function() {
            $http.delete(serviceBase + 'paziente/' + this.book.id);
        },
        update: function() {
            $http.put(serviceBase + '/' + bookId, this);
        },
    };
    return Book;
}]);