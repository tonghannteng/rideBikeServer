var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    "sub": String,
    "name": String,
    "given_name": String,
    "family_name": String,
    "nickname": String,
    "picture": String,
    "gender": String,
    "locale": String,
    "updated_at": Date
});

mongoose.model('userInfo', userSchema);
module.exports = mongoose.model('userInfo');