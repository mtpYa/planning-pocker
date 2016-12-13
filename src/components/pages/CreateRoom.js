import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import roomActions from '../../actions/roomActions';

import Button from '../forms/Button.js';
import Input from '../forms/Input.js';

class CreateRoom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createRoom({name: this.state.value});
    // hashHistory.push('room');
  }

  render() {
    return (
      <div>
        <Input
          placeholder="enter room name"
          name="room-name"
          type="text"
          value={this.state.value}
          onChangeHandler={this.handleChange}
        />
        <Button
          value="Create Room"
          type="submit"
          onHandleClick={this.handleClick}
        />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    rooms: state.room.rooms
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createRoom(newRoom) {
      dispatch(roomActions.createRoomAsync(newRoom));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);
