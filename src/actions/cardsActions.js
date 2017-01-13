import ActionTypes from '../constants/ActionTypes';

function setSelected(value) {
  return {
    type: ActionTypes.SET_SELECTED,
    value
  }
}

function addExtraValues(extraValues) {
  return {
    type: ActionTypes.ADD_EXTRAVALUES,
    extraValues
  }
}

export default {
  setSelected,
  addExtraValues
}
