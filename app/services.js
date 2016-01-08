app.service( 'MyService', [ function() {
    var myService = this;
    myService.paziente = {};

    return {
        get: function() {
            return myService.paziente;
        },
        set: function(curPaziente) {
            myService.paziente = curPaziente;
        }
    };
}]);