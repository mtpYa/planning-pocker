const Room = require('./mongoose.conf').Room;

module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    const userInfo = {
      userId: socket.handshake.query.userId,
      roomId: socket.handshake.query.roomId
    };

    socket.on('get_users', (roomId) => {
      Room.findById(roomId, (err, room) => {
        io.emit('send_room', room)
      });
    });

    socket.on('disconnect', () => {
      Room.findById(userInfo.roomId, (err, room) => {
        var elemIdx = room.users.map(elem => elem._id).indexOf(userInfo.userId);

        room.users.splice(elemIdx);
        room.save((err, changedRoom) => {
          io.sockets.emit('userDisconnect', {userId: userInfo.userId});
        });
      });
    })
  });
}
