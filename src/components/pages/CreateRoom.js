import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import roomActions from '../../actions/roomActions';

import Button from '../elements/forms/Button';
import Input from '../elements/forms/Input';

class CreateRoom extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.room._id) {
      hashHistory.push({ pathname: 'room/' + nextProps.room.name, query: {id: nextProps.room._id}});
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createRoom({name: this.state.value});
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
    room: state.room.currRoom
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
