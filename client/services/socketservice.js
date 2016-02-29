angular.module('myApp')
.factory('socket', ['$rootScope', function($rootScope) {    
  var socket = io.connect("https://paired-up.herokuapp.com");
  return {
    on: function(eventName, callback){
      socket.on(eventName, callback);
    },
    emit: function(eventName, data) {
      socket.emit(eventName, data);
    }
  };
}]);