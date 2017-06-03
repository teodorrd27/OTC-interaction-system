'use strict';
otcApp.controller("buttonsController", ['$scope', 'maxFactory', function($scope, maxFactory){
  $scope.first = function() {
    var object = maxFactory.object;
    var newNumber = parseInt(object.red) + 1;
    console.log(newNumber);
    maxFactory.update(newNumber);
  };
  $scope.second = function() {
    console.log("GOODBYE");
  };
  $scope.third =function() {
    console.log("HOWYA");
  };
}]);
