angular.module("app").controller("MainController", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){
    $scope.greeting = $scope.$meteorObject(Toy , {_id: "mE7aP6RpQrXWBKeSu"});
    $scope.log = function(){
      console.log('change!');
      if($scope.greeting.booga)
        $scope.greeting.booga+= 10;
      else
        $scope.greeting.booga = 1;
    }
    $scope.checkLength = function(length){
      if(length >=  10)
        return true
      else
        return false;
    }
    console.log($scope.greeting);
}]);
