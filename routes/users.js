var express = require('express');
var router = express.Router();
var mongoOp = require('./user.model');

//get data
router.get('/', function (req, res, next) {

    var response = {};
    mongoOp.find({}, function (err, data) {
        if (err) {
            response = { "error": true, "message": "Error fetching data" };
        } else {
            // response = {"error": false, "message": data};

        }
        res.json(data);
    });

});

router.post('/', function (req, res, next) {


    mongoOp.findOneAndUpdate({ sub: req.body.sub }, req.body, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("sucessed");
    });

});

module.exports = router;