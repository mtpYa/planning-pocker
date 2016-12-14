import ActionTypes from '../constants/ActionTypes';

let initialState = {
  currUser: {}
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_USER:
      return Object.assign({}, state, {currUser: action.user});
    default:
      return state;
  }
}

export default userReducer;
