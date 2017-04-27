var mongoose = require("mongoose");
var clubSchema = new mongoose.Schema({
    name: String,
    owner : String,
    loc: Array,
    city: String,
    users: Array,
    events: [{
    name: String,
    loc: Array,
    members : Array,
    createTime: {type : Date},
    }],
});
clubSchema.index({
 loc: "2d"
})
module.exports = mongoose.model('club', clubSchema);