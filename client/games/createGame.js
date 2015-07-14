angular.module("app").controller("CreateGameController", ['$scope','$stateParams', '$meteor', '$window',
  function($scope, $stateParams, $meteor, $window){
    // $scope.game = $scope.$meteorCollection(Games);
    $scope.paragraph = "A little boy went out to play. When he opened his door, he saw the world. As he passed through the doorway, he caused a reflection. Evil was born, and followed the boy."
    $scope.createGame = function(text){
      var currentUserId = Meteor.user()._id;
      var currentUserEmail = Meteor.user().emails[0].address
      var gameId = Games.insert({
        text : text,
        players : [{
          id : currentUserId,
          email : currentUserEmail,
          input: ""
        }],
        creator: {
          id: currentUserId,
          email : currentUserEmail,
        },
        winner : null,
        timeStarted : null
      });


      // redirect to the homepage
      $window.location.href = '/game/'+gameId;
    }
    $scope.signedIn = function(){
      return Meteor.userId();
    }
}]);
