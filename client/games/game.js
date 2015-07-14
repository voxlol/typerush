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

    $scope.isAdmin = function(){
      return $scope.match.creator.email === Meteor.user().emails[0].address;
    }

    $scope.startMatch = function(){
      // console.log("STARTING THE MATCH...");
      $scope.match.timeStarted = moment();
    }

    $scope.displayTime = function(){ // currently working here
      var startTime = $scope.match.timeStarted;
      var currentTime = moment();
      var duration = currentTime;
    }
}]);
