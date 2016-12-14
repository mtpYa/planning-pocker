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

export default {
  createRoom
}