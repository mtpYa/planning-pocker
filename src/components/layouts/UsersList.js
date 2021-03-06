import React from 'react';
import { connect } from 'react-redux';

import userActions from '../../actions/userActions';
import cardsActions from '../../actions/cardsActions';

import List from '../elements/lists/List.js';

class UsersList extends React.Component {

  componentDidMount() {
    this.props.socket.on('dropValues', () => {
      this.props.dropValues();
    });

    this.props.socket.on('send_room', data => {
      this.props.addUsers(data.users);
    });

    this.props.socket.on('userDisconnect', data => {
      this.props.removeUser(data.userId);
    });

    this.props.socket.on('showResults', data => {
      let results = data.reduce((prev, item) => {
        item.value === -1 ? prev : prev.push(item.value)
        return prev
      }, []);
      let extraValues = {min: Math.min(...results), max: Math.max(...results)};
      this.props.addExtraValues(extraValues);
      this.props.addValue(data);
    });
  }

  render() {
    return this.props.users.length == 0
      ? null
      : <List
          elems={this.props.users}
          elemName='userItem'
          listClass='horizontal_list'
          extraValues={this.props.extraValues}
          />
  }

}

function mapStateToProps(state) {
  return {
    users: state.user.users,
    extraValues: state.cards.extraValues
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
    },
    dropValues() {
      dispatch(userActions.dropValues());
    },
    addExtraValues(extraValues) {
      dispatch(cardsActions.addExtraValues(extraValues));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
