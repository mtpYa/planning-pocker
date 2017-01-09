import ActionTypes from '../constants/ActionTypes';

function setSelected(value) {
  return {
    type: ActionTypes.SET_SELECTED,
    value
  }
}

export default {
  setSelected
}
