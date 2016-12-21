import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createUser(user) {
  return {
    type: ActionTypes.CREATE_USER,
    user
  }
}

function addUsers(users) {
  return {
    type: ActionTypes.ADD_USERS,
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

function getUsersAsync(obj) {
  return (dispatch) => {
    return RoomApi.getUsers(obj)
  };
}

export default {
  createUserAsync,
  getUsersAsync,
  addUsers
}
