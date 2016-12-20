const Room = require('./mongoose.conf').Room;

module.exports = function(server) {
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    socket.on('event', function(roomId) {
      console.log(roomId);

      Room.findById(roomId, function(err, room) {
        console.log(room);
        io.emit('send room', room)
      });

    });
  });
}
