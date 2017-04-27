var express = require('express');
var router = express.Router();
var ChatModel = require('./chat.model');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


server.listen(4000);

// socket io
io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log(data);
    var newMsg = ChatModel(data);
    newMsg.save();
    io.emit('new-message', { message: data });
  });
});

router.get('/:user', function (req, res, next) {
    console.log(req.params);
    ChatModel.find({ to: req.params.user }, function (err, chats) {
    if (err) return next(err);
    res.json(chats);
  });
});




module.exports = router;
