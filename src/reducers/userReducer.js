import ActionTypes from '../constants/ActionTypes';

let initialState = {
  currUser: {},
  users: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER:
      return Object.assign({}, state, { currUser: action.user });
    case ActionTypes.ADD_USERS:
      return Object.assign({}, state, { users: action.users });
    case ActionTypes.REMOVE_USER:
      let userIdx = state.users.map(elem => elem.id).indexOf(action.userId);
      let newUsers = JSON.parse(JSON.stringify(state.users));
      newUsers.splice(userIdx, 1);

      return Object.assign({}, state, { users: JSON.parse(JSON.stringify(newUsers)) });
    default:
      return state;
  }
}

export default userReducer;
