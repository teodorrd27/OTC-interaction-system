'use strict';
otcApp.factory('maxFactory', function(){
  var maxFac = {};
  maxFac.object = {
    red: '0',
    yellow: '0',
    green: '0'
  };
  maxFac.update = function(newNumber, index){
    maxFac.object[index] = newNumber;
    console.log(maxFac.object);
  };
  return maxFac;
});
