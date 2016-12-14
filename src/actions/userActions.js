import ActionTypes from '../constants/ActionTypes';
import RoomApi from '../appAPI/roomApi';

function createUser(user) {
  return {
    type: ActionTypes.CREATE_USER,
    user
  }
}

function createUserAsync(newUser) {
  return (dispatch) => {
    return RoomApi.createUser(newUser)
      .then(data => dispatch(createUser(data)))
      .catch(err => console.log(err));
  };
}

export default {
  createUserAsync
}
