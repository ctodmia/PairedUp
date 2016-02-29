var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentSchema = new Schema ({
    title: String, 
    code: String,
    mode: String,
    displayName: String,
    sharedUser: String, 
    room: String,
    id: Number, 
});

var Document = mongoose.model('Document', documentSchema);

module.exports = {
  userDocument: Document,
};