import { combineReducers } from 'redux';

import room from './roomReducer.js';
import user from './userReducer.js';

const appReducer = combineReducers({
  room,
  user
});

export default appReducer;
