import ActionTypes from '../constants/ActionTypes';

const initialState = {
  chatMessages: []
};

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      return Object.assign({}, state, {chatMessages: [ ...state.chatMessages, action.message ]});
    default:
      return state;
  }
}

export default chatReducer;