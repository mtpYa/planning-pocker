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

    socket.on('startTimer', (roomId) => {
      var timeCount = 21;

      Room.findById(roomId, (err, room) => {
        room.results = [];
        room.save();
      });

      const timePointer = setInterval(() => {
        if (timeCount >= 0) {
          io.sockets.emit('timerCount', timeCount);
          timeCount--;
        } else {
          clearInterval(timePointer);
          io.sockets.emit('getUserAnswer');
        }
      }, 1000);
    });

    socket.on('userChoise', (userInfo) => {
      Room.findById(userInfo.roomId, (err, room) => {
        var userChoise = {
          id: userInfo.userId,
          value: userInfo.value
        };
        room.results.push(userChoise);

        room.save((err, changedRoom) => {
          //TODO: Compare room.results with room.users and emit event when they are equal
        });
      });
    });

    socket.on('newMessage', (message) => {
      io.emit('showMessage', message)
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
