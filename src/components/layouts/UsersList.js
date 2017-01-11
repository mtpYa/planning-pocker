import React from 'react';
import { connect } from 'react-redux';

import userActions from '../../actions/userActions';

import List from '../elements/lists/List.js';

class UsersList extends React.Component {

  componentDidMount() {
    this.props.socket.on('send_room', data => {
      this.props.addUsers(data.users);
    });

    this.props.socket.on('userDisconnect', data => {
      this.props.removeUser(data.userId);
    });

    this.props.socket.on('showResults', data => {
      this.props.addValue(data);
    });
  }

  render() {
    return this.props.users.length == 0
      ? null
      : <List
          elems={this.props.users}
          elemName='listItem'
          listClass='horizontal_list'
          />
  }

}

function mapStateToProps(state) {
  return {
    users: state.user.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUsers(users) {
      dispatch(userActions.addUsers(users));
    },
    removeUser(userId) {
      dispatch(userActions.removeUser(userId));
    },
    addValue(userValue) {
      dispatch(userActions.addValue(userValue));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
