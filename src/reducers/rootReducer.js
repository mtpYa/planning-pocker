import { combineReducers } from 'redux';

import roomReducer from './roomReducer.js';

const appReducer = combineReducers({
  room: roomReducer
});

export default appReducer;