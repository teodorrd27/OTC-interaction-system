'use strict';
otcApp.factory('maxFactory', function(){
  var maxFac = {};
  maxFac.object = {
    red: '0',
    yellow: '0',
    green: '0'
  };
  maxFac.update = function(newNumber){
    maxFac.object.red = newNumber;
  };
  return maxFac;
});
