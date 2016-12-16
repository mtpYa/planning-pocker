import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createRoom(room) {
  return {
    type: ActionTypes.CREATE_ROOM,
    room
  }
}

function getRoom(room) {
  return {
    type: ActionTypes.GET_ROOM,
    room
  }
}

function createRoomAsync(newRoom) {
  return (dispatch) => {
    return RoomApi.createRoom(newRoom)
      .then(data => dispatch(createRoom(data)))
      .catch(err => console.log(err));
  };
}



function getRoomAsync(oldRoom) {
  return (dispatch) => {
    return RoomApi.getRoom(oldRoom)
      .then(data => dispatch(getRoom(data)))
      .catch(err => console.log(err));
  };
}

export default {
  createRoomAsync,
  getRoomAsync
}
