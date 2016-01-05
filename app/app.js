var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      title: 'Pazienti',
      templateUrl: 'partials/products.html',
      controller: 'pazientiCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });;
}]);
    