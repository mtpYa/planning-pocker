import ActionTypes from '../constants/ActionTypes';

let initialState = {
  currUser: {},
  users: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER:
      return Object.assign({}, state, {currUser: action.user});
    case ActionTypes.ADD_USERS:
      return Object.assign({}, state, {users: action.users});
    default:
      return state;
  }
}

export default userReducer;
