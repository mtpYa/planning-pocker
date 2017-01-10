import ActionTypes from '../constants/ActionTypes';

function addMessage(message) {
  return {
    type: ActionTypes.ADD_MESSAGE,
    message
  }
}

export default {
  addMessage
}
