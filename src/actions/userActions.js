import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createUser(user) {
  return {
    type: ActionTypes.CREATE_USER,
    user
  }
}

function getUsers(users) {
  return {
    type: ActionTypes.GET_USERS,
    users
  }
}

function createUserAsync(newUser) {
  return (dispatch) => {
    return RoomApi.createUser(newUser)
      .then(data => dispatch(createUser(data)))
      .catch(err => console.log(err));
  };
}

function getUsersAsync(roomId) {
  return (dispatch) => {
    return RoomApi.getUsers(roomId)
      .then(data => dispatch(getUsers(data)))
      .catch(err => console.log(err));
  };
}

export default {
  createUserAsync,
  getUsersAsync
}
