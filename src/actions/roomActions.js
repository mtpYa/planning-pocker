import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createRoom(room) {
  return {
    type: ActionTypes.CREATE_ROOM,
    room
  }
}

function createRoomAsync(newRoom) {
  return (dispatch) => {
    return RoomApi.createRoom(newRoom)
      .then(data => dispatch(createRoom(data.room)))
      .catch(err => console.log(err));
  };
}

export default {
  createRoomAsync
}