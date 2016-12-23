import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';
let socket;

import UserCreate from '../layouts/UserCreate';
import List from '../elements/lists/List.js';
import userActions from '../../actions/userActions';
import roomActions from '../../actions/roomActions';

class Room extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!this.props.user.name && nextProps.user.name) {
      socket = io('/');
      this.props.getUsers({roomId: this.props.room._id, io: socket});
    }
  }

  componentWillMount() {
    if (!this.props.room.name) {
      this.props.getRoom(this.props.location.query.id);
    }
  }

  componentWillUpdate() {
    if (socket) {
      socket.on('send_room', data => {
        this.props.addUsers(data.users);
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Room: {this.props.room.name}</h1>
        { this.toogleModalWindow() }
        { this.showUsersList() }
      </div>
    )
  }

  toogleModalWindow() {
    return this.props.user.name ? null : <UserCreate {...this.props} />
  }

  showUsersList() {
    return this.props.users.length == 0 ? null : <List elems = {this.props.users} />
  }

}

function mapStateToProps(state) {
  return {
    room: state.room.currRoom,
    user: state.user.currUser,
    users: state.user.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers(roomId) {
      dispatch(userActions.getUsersAsync(roomId));
    },
    getRoom(roomId) {
      dispatch(roomActions.getRoomAsync(roomId));
    },
    addUsers(users) {
      dispatch(userActions.addUsers(users));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
