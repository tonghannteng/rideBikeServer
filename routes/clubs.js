var express = require('express');
var router = express.Router();
var Club = require('./club.model');
var ObjectId = require('mongodb').ObjectID;

//create 
router.post('/create', function (req, res, next) {
  console.log("create club server");
  let data = req.body;
  console.log(data);
  let c = new Club(data);
  c.save(function (err, d) {
    if (err) { return handleError(res, err); }
    return res.status(201).json(d);
  });
});


//get
router.post('/nearby', function (req, res, next) {
  let loc = req.body.loc;
  console.log("nearBy");
  console.log(loc);
  Club.find({
    loc: {
      $near: [parseFloat(loc[1]), parseFloat(loc[0])],
      $maxDistance: 500
    }
  }, function (err, club) {
    if (err) return next(err);
    if (!club) return res.status(401).send('no club');
    console.log("get club");
    console.dir(club);
    res.json(club);
    res.end();
  });
});

//join
router.post('/join', function (req, res, next) {
  let data = req.body;
  console.log(data);

  var query = { '_id': data.club._id };
  data.club.users.push(data.userId);
  Club.findOneAndUpdate(query, data.club, { upsert: true }, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send(doc);
  });
});
module.exports = router;
