if(Meteor.isClient){
  angular.module('app', ['angular-meteor', 'ui.router']);


  // routing
  angular.module('app').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'client/index.ng.html',
          controller: 'MainController'
        })

  }]);
}
