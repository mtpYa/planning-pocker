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
    case ActionTypes.REMOVE_USER:
      let userIdx = state.users.map(elem => elem.id).indexOf(action.userId);
      let newUsers = state.users.slice();

      return Object.assign({}, state, {users: newUsers.splice(userIdx)});
    default:
      return state;
  }
}

export default userReducer;
