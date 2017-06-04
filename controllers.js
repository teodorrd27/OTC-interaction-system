'use strict';
otcApp.controller("buttonsController", ['$scope', 'maxFactory', function($scope, maxFactory){
  var votes = maxFactory.votes;
  $scope.first = function() {

    var newNumber = parseInt(votes.red) + 1;
    maxFactory.update(newNumber, 'red');
    console.log(votes.red);
  };
  $scope.second = function() {
    var newNumber = parseInt(votes.yellow) + 1;
    maxFactory.update(newNumber, 'yellow');
    console.log(votes.yellow);
  };
  $scope.third =function() {
    var newNumber = parseInt(votes.green) + 1;
    maxFactory.update(newNumber, 'green');
    console.log(votes.green);
  };
}]);
