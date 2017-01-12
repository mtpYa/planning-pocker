import ActionTypes from '../constants/ActionTypes';

const initialState = {
  selectedCard: '?',
  cardsList: [-1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 111],
  extraValues: {min: null, max: null}
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTED:
      return Object.assign({}, state, {selectedCard: action.value});
    case ActionTypes.ADD_EXTRAVALUES:
      return Object.assign({}, state, {extraValues: action.extraValues});
    default:
      return state;
  }
}

export default cardsReducer;
