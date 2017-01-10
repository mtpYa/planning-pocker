import { combineReducers } from 'redux';

import room from './roomReducer';
import user from './userReducer';
import cards from './cardsReducer';
import chat from './chatReducer';

const appReducer = combineReducers({
  room,
  user,
  cards,
  chat
});

export default appReducer;
