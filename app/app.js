var app = angular.module('ambulatorioApp', ['ui.router', 'ncy-angular-breadcrumb', 'ui.bootstrap',
                                            'ngAnimate', 'anagrafica', 'paziente', 'visita']);

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("anagrafica");

});

app.value('urlAPI', 'http://ambulatorio.localhost:8000/');


app.controller('panelCtrl', function () {
  this.tab=1;
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
});
