import ActionTypes from '../constants/ActionTypes';

const initialState = {
  selectedCard: '?',
  cardsList: ['?', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '\u221e']
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED:
      return Object.assign({}, state, {selectedCard: action.value});
    default:
      return state;
  }
}

export default cardsReducer;