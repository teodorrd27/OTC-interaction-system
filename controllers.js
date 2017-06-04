'use strict';
otcApp.controller("buttonsController", ['$scope', 'maxFactory', function($scope, maxFactory){
  var object = maxFactory.object;
  $scope.first = function() {

    var newNumber = parseInt(object.red) + 1;
    maxFactory.update(newNumber, 'red');
    console.log(object.red);
  };
  $scope.second = function() {
    var newNumber = parseInt(object.yellow) + 1;
    maxFactory.update(newNumber, 'yellow');
    console.log(object.yellow);
  };
  $scope.third =function() {
    var newNumber = parseInt(object.green) + 1;
    maxFactory.update(newNumber, 'green');
    console.log(object.green);
  };
}]);
