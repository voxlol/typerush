angular.module("app").controller("GameController", ['$scope','$stateParams', '$meteor', '$window',
  function($scope, $stateParams, $meteor, $window){
    $scope.id = $stateParams.gameId;
    $scope.match = $scope.$meteorObject(Games, {_id: $stateParams.gameId });
    $scope.creator = $scope.match.creator.email;
    // $scope.currentPlayer = $scope.$meteorObject(Meteor.users, {_id: Meteor.userId()});
    // Need to attach a scope variable to the users input in the thing

}]);
