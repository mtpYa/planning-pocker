const Room = require('./mongoose.conf').Room;

module.exports = (server, currUserInfo) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    socket.on('get_users', (roomId) => {
      Room.findById(roomId, (err, room) => {
        io.emit('send_room', room)
      });
    });

    socket.on('disconnect', () => {
      Room.findById(currUserInfo.roomId, (err, room) => {
        var elemIdx = room.users.map(elem => elem._id).indexOf(currUserInfo.userId);

        room.users.splice(elemIdx);
        room.save((err, changedRoom) => {
          io.sockets.emit('userDisconnect', {userId: currUserInfo.userId});
        });
      });
    })
  });
}
