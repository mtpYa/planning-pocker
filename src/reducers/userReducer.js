import ActionTypes from '../constants/ActionTypes';

let initialState = {
  currUser: {},
  users: []
};

function userReducer(state = initialState, action) {
  let newUsers = [];

  switch (action.type) {
    case ActionTypes.CREATE_USER:
      return Object.assign({}, state, { currUser: action.user });
    case ActionTypes.ADD_USERS:
      return Object.assign({}, state, { users: action.users });


    case ActionTypes.ADD_VALUE:
      console.log(state.users);
      console.log(action.userValue);

      newUsers = JSON.parse(JSON.stringify(state.users));

      newUsers.forEach(elem => {
        action.userValue.forEach( item => {
          if (elem.id === item.id) {
            elem.value = item.value
          }
        })
      })
      return Object.assign({}, state, { users: newUsers });


    case ActionTypes.REMOVE_USER:
      let userIdx = state.users.map(elem => elem.id).indexOf(action.userId);
      newUsers = JSON.parse(JSON.stringify(state.users));
      newUsers.splice(userIdx, 1);

      return Object.assign({}, state, { users: newUsers });
    default:
      return state;
  }
}

export default userReducer;
