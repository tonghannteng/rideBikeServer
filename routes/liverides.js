var express = require('express');
var router = express.Router();
var UserPos = require('./userpos.model');

router.get('/', function (req, res, next) {
    UserPos.find({}, (err, data) => {
        if (err) throw err;
        //console.log(data);
        res.send(data);
    })

});
router.post('/userPos', function (req, res, next) {
    //console.log(req.body);
    UserPos.findOneAndUpdate({_id:req.body._id}, req.body, {upsert:true}, function (err, doc) {
        if (err) return res.send(500, { error: err});
        return res.send("sucessed");
    });
});

module.exports = router;