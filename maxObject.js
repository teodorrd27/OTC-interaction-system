'use strict';
otcApp.factory('maxFactory', ['$resource', function($resource){
  var maxFac = {};
  var Votes = $resource('http://localhost:3000/colors', null, {update: {method: 'PUT'}});
  maxFac.votes = Votes.get( function(){
    console.log(maxFac.votes);
  });
  maxFac.update = function(newNumber, index){
    maxFac.votes[index] = newNumber;
    console.log(maxFac.votes);
    var $id = maxFac.votes.id;
    Votes.update(null, maxFac.votes);
  };
  return maxFac;
}]);
