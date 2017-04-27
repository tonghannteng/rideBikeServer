var express = require('express');
var router = express.Router();
var Club = require('./club.model');
var ObjectId = require('mongodb').ObjectID;

//create event
router.post('/create', function (req, res, next) {
    console.log("create event");
    console.log(req.body);
    let event = req.body;
    Club.findByIdAndUpdate(
        event.clubId,
        { $push: { "events": event } },
        { safe: true, upsert: true, new: true },
        function (err, instance) {
            console.log(err);
            if (err) {
                return res.status(201).json("add event error");
            }
            return res.json(event);
        }
    );
});

//join
router.post('/join', function (req, res, next) {
    let club = req.body;
    console.log(club);

    var query = { '_id': club._id };
    Club.findOneAndUpdate(query, club, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send(doc);
    });
});
module.exports = router;
