import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';
let socket;

import ModuleUserCreate from '../layouts/ModuleUserCreate';
import UserList from '../layouts/UserList';
import userActions from '../../actions/userActions';

class Room extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (!this.props.user.name && nextProps.user.name) {
      socket = io('http://localhost:3000');
      socket.on('event', data => {
        console.log(data)
      });

      this.props.getUsers(this.props.room._id)
    }
  }

  componentWillMount() {
    console.log(this.props.location.query.id)
    if (!this.props.room.name) {
      
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
    return this.props.user.name ? null : <ModuleUserCreate {...this.props} />
  }

  showUsersList() {
    return this.props.users.length == 0 ? null : <UserList users = {this.props.users} />
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
