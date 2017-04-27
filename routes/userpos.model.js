var mongoose = require("mongoose");
var userposSchema = new mongoose.Schema({
    "_id":String,
    "lat": Number,
    "lng": Number
 
});


module.exports = mongoose.model('userpos', userposSchema);