import ActionTypes from '../constants/ActionTypes';

let initialState = {
  currRoom: {}
};

function roomReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_ROOM:
      return Object.assign({}, state, {currRoom: action.room});
    default:
      return state;
  }
}

export default roomReducer;
