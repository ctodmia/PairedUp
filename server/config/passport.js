//this is where the passport logic will live.

var passport = require('passport'),    
var mongoose = require('mongoose');

module.exports = function() {  
	var User = mongoose.model('User'); 
	passport.serializeUser(function(user, done) {    
		done(null, user.id);  
	});
  	passport.deserializeUser(function(id, done) {    
  		User.findOne({      
  			_id: id    
  		}, '-password -salt', function(err, user) {      
  			done(err, user);    
  		});  
  	});
  // require('./strategies/local.js')();  we are not currently working on
  require('./strategies/github.js')(); 
};