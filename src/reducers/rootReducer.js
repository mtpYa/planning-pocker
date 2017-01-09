import { combineReducers } from 'redux';

import room from './roomReducer.js';
import user from './userReducer.js';
import cards from './cardsReducer';

const appReducer = combineReducers({
  room,
  user,
  cards
});

export default appReducer;
