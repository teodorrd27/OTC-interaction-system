'use strict';
otcApp.controller("buttonsController", ['$scope', function($scope){
  $scope.first = function() {
    console.log("HELLO");
  };
  $scope.second = function() {
    console.log("GOODBYE");
  };
  $scope.third =function() {
    console.log("HOWYA");
  };
}]);
