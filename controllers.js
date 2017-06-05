'use strict';
otcApp.controller("buttonsController", ['$scope', /*'maxFactory',*/ '$resource', function($scope, /*maxFactory,*/ $resource){
  var votes = {};
  var Votes = $resource('http://192.168.1.180:3000/colors', null, {update: {method: 'PUT'}});
  $scope.first = function() {
    votes = Votes.get( function(){
      console.log(votes);
      votes.red = parseInt(votes.red) + 1;

      console.log(votes);
      Votes.update(null, votes);
      $scope.red = votes.red;
    });


  };
  $scope.second = function() {
    votes = Votes.get( function(){
      console.log(votes);
      votes.yellow = parseInt(votes.yellow) + 1;

      console.log(votes);
      Votes.update(null, votes);
      $scope.yellow = votes.yellow;
    });
  };
  $scope.third =function() {
    votes = Votes.get( function(){
      console.log(votes);
      votes.green = parseInt(votes.green) + 1;

      console.log(votes);
      Votes.update(null, votes);
      $scope.green = votes.green;
    });
  };
}]);
