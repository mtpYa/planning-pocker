import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';
let socket;

import UserCreate from '../layouts/UserCreate';
import CardContainer from '../layouts/cardContainer';
import UsersList from '../layouts/UsersList';
import Button from '../elements/forms/Button';
import Timer from '../elements/Timer';

import userActions from '../../actions/userActions';
import roomActions from '../../actions/roomActions';

class Room extends React.Component {

  constructor(props) {
    super(props);

    this.toogleModalWindow = this.toogleModalWindow.bind(this);
    this.showUsersList = this.showUsersList.bind(this);
    this.showCardsList = this.showCardsList.bind(this);
    this.handleTimerClick = this.handleTimerClick.bind(this);
    this.showTimerInfo = this.showTimerInfo.bind(this);
    this.userResponse = this.userResponse.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user.name && nextProps.user.name) {
      socket = io('/', {query: 'userId=' + nextProps.user.id + '&roomId=' + this.props.room._id});
      this.props.getUsers({ roomId: this.props.room._id, io: socket });
    }
  }

  componentWillMount() {
    if (!this.props.room.name) {
      this.props.getRoom(this.props.location.query.id);
    }
  }

  handleTimerClick() {
    socket.emit('startTimer', this.props.room._id);
  }

  userResponse() {
    socket.emit('userChoise', {
      roomId: this.props.room._id,
      userId: this.props.user.id,
      value: this.props.selectedCard
    });
  }

  render() {
    return (
      <div>
        <h1>Room: {this.props.room.name}</h1>
        {this.showTimerInfo()}
        {this.toogleModalWindow()}
        {this.showUsersList()}
        {this.showCardsList()}
      </div>
    )
  }

  toogleModalWindow() {
    return this.props.user.name ? null : <UserCreate {...this.props} />
  }

  showUsersList() {
    return socket
      ? <UsersList socket={socket} />
      : null
  }

  showCardsList() {
    return this.props.user.name ? <CardContainer /> : null;
  }

  showTimerInfo() {
    return socket
      ? <div>
          <Timer
            socket={socket}
            userChoiseResponse={this.userResponse}
          />
          { this.props.user.isAdmin
            ? <Button
                value="Start Timer"
                type="button"
                onHandleClick={this.handleTimerClick}
              />
            : null
          }
        </div>
      : null
  }

}

function mapStateToProps(state) {
  return {
    room: state.room.currRoom,
    user: state.user.currUser,
    selectedCard: state.cards.selectedCard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers(roomId) {
      dispatch(userActions.getUsersAsync(roomId));
    },
    getRoom(roomId) {
      dispatch(roomActions.getRoomAsync(roomId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
