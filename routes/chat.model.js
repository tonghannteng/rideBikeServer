var mongoose = require("mongoose");
var chatSchema = new mongoose.Schema({
    "from": String,
    "to": String,
    "body": String,
    "time":Date
});
module.exports = mongoose.model('chat', chatSchema);