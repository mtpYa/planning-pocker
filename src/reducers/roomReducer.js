import ActionTypes from '../constants/ActionTypes';

let initialState = {
  rooms: []
};

function roomReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_ROOM:
      return Object.assign({}, state, {rooms: [...state.rooms, action.room]});
    default:
      return state;
  }
}

export default roomReducer;