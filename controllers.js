'use strict';
otcApp.controller("buttonsController", ['$scope', '$resource', function($scope, $resource){
  var votes = {};
  var Votes = $resource('http://192.168.1.180:3000/colors', null, {update: {method: 'PUT'}});
  $scope.first = function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.red = parseInt(votes.red) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.red = "voted";
    });

  };

  $scope.second = function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.yellow = parseInt(votes.yellow) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.yellow = "voted";
    });
  };

  $scope.third =function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.green = parseInt(votes.green) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.green = "voted";
    });
  };

}]);
