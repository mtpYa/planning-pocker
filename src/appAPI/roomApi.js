import io from 'socket.io-client';
let socket;

function createRoom(room) {
  return fetch('/newroom', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ room })
  })
    .then(response => response.json());
}

function createUser(user) {
  return fetch('/newuser', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ user })
  })
    .then(response => response.json());
}

function getUsers(obj) {
  obj.io.emit('get_users', obj.roomId)
}

function getRoom(roomId) {
  return fetch('/oldroom/' + roomId)
    .then(response => response.json());
}

export default {
  createRoom,
  createUser,
  getUsers,
  getRoom
}
