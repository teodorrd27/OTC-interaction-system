'use strict';
otcApp.controller("buttonsController", ['$scope', '$resource', '$interval', function($scope, $resource, $interval){
  var votes = {};
  var Votes = $resource('http://192.168.0.15:3000/colors', null, {update: {method: 'PUT'}});
  $scope.first = function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.voted = parseInt(votes.red) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.votedR = "voted";
    });
  };

  $scope.second = function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.voted = parseInt(votes.yellow) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.votedY = "voted";
    });
  };

  $scope.third =function() {
    $("button").prop('disabled', true);
    votes = Votes.get( function(){
      console.log(votes);
      votes.voted = parseInt(votes.green) + 1;
      console.log(votes);
      Votes.update(null, votes);
      $scope.votedG = "voted";
    });
  };
  var context = {};
  var Context = $resource('http://192.168.0.15:3000/context');
  context = Context.get(function(){
    console.log(context.question);
    $scope.context = context.question;
  });
  $interval(function(){
    var new_context = Context.get(function(){
      console.log(new_context.question);
      if (context.question != new_context.question)
      {
        $("button").prop('disabled', false);
        context.question = new_context.question;
        $scope.votedR = "";
        $scope.votedY = "";
        $scope.votedG = "";
      }
      $scope.context = context.question;
      $scope.red = context.red;
      $scope.yellow = context.yellow;
      $scope.green = context.green;
    });
  }, 5000);
}]);
