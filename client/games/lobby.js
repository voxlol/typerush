angular.module("app").controller("LobbyController", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){
    $scope.games = $scope.$meteorCollection(Games, {winner:null});

    $scope.joinGame = function(game){
      var currentUserId = Meteor.userId();
      var currentUserEmail = Meteor.user().emails[0].address;
      var gamePlayers = game.players;

      var inCurrentGame = gamePlayers.some(function(playerObj){
        if(playerObj.id === currentUserId)
          return true;
      });

      if(!inCurrentGame){
        // if not in the ccurrent game, join
        game.players.push({
          id : currentUserId,
          email : currentUserEmail,
          input: "",
        })
      }
    }

    $scope.signedIn = function(){
      return Meteor.userId();
    }

    $scope.amountOfGames = function(){
      return $scope.games.length
    }
}]);
