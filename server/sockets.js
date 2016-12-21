const Room = require('./mongoose.conf').Room;

module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.on('get_users', (roomId) => {
      Room.findById(roomId, (err, room) => {
        io.emit('send_room', room)
      });
    });
  });
}
