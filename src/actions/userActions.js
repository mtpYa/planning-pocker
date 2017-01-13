import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createUser(user) {
  return {
    type: ActionTypes.CREATE_USER,
    user
  }
}

function removeUser(userId) {
  return {
    type: ActionTypes.REMOVE_USER,
    userId
  }
}

function addUsers(users) {
  return {
    type: ActionTypes.ADD_USERS,
    users
  }
}

function addValue(userValue) {
  return {
    type: ActionTypes.ADD_VALUE,
    userValue
  }
}

function dropValues() {
  return {
    type: ActionTypes.DROP_VALUES
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
  addUsers,
  removeUser,
  addValue,
  dropValues
}
