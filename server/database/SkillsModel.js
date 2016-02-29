var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var skillsSchema = new mongoose.Schema({
  angular: Number,
  node: Number,
  html: Number,
  css: Number, 
  jquery: Number,
  java: Number,
  ruby: Number,
  swift: Number,
  python: Number,
  go: Number,
  userid: { type: Number, ref: 'User' }
});

var Skills = mongoose.model("Skills", skillsSchema);


module.exports = {
  skills: Skills
};