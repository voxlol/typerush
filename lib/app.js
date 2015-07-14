if(Meteor.isClient){
  angular.module('app', ['angular-meteor', 'ui.router']);


  // routing
  angular.module('app').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('lobby', {
          url: '/',
          templateUrl: 'client/games/lobby.ng.html',
          controller: 'LobbyController'
        })
        .state('create', {
          url: '/create',
          templateUrl: 'client/games/createGame.ng.html',
          controller: 'CreateGameController'
        })
        .state('match', {
          url: '/game/:gameId',
          templateUrl: 'client/games/game.ng.html',
          controller: 'GameController'
        })

  }]);
}
