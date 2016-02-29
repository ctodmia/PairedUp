var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

db.on('error', function(err){
  console.log('connection error', err);
});

db.once('open', function(){
  console.log('connect');
});

var userSchema = new Schema({
 displayName: String,
 githubName: String,
 picture: String,
 github: String,
 location: String,
 membersince: Date,
 linkedin: String,
 futureskills: {
   angular: Boolean,
   node: Boolean,
   html: Boolean,
   css: Boolean,
   jquery: Boolean,
   python: Boolean,
   swift: Boolean,
   java: Boolean,
   go: Boolean,
   ruby: Boolean,
 },
 skills:{ 
   angular: Number,
   node: Number,
   html: Number,
   css: Number, 
   jquery: Number,
   python: Number,
   swift: Number,
   java: Number,
   go: Number,
   ruby: Number
 },
});

var User = mongoose.model("User", userSchema);

module.exports = {
  user: User

};
