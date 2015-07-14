angular.module("app").controller("GameController", ['$scope','$stateParams', '$meteor', '$window',
  function($scope, $stateParams, $meteor, $window){
    $scope.match = $scope.$meteorObject(Games, {_id: $stateParams.gameId });
    // $scope.userInput  = $scope.match.players
    $scope.id = $stateParams.gameId;

    $scope.currentPlayerIndex = function(){
      var currentUserId = Meteor.userId();
      for(var i = 0; i < $scope.match.players.length; i++){
        if($scope.match.players[i].id === currentUserId)
          return i;
      }
    }

    // var currentPlayerIndex = currentPlayerInput();
    // $scope.userInput = $scope.match.players[currentPlayerIndex].input;

    // $scope.userInput =

    // $scope.currentPlayer = $scope.$meteorObject(Meteor.users, {_id: Meteor.userId()});
    // Need to attach a scope variable to the users input in the thing
    // console.log(currentPlayerIndex);
}]);
