module.exports = function(server) {
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {
    socket.emit('event', { hello: 'world' });
  });
  }
