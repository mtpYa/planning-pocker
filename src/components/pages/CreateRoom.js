import React from 'react';
import request from 'superagent';
import { hashHistory } from 'react-router';
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
    hashHistory.push('room');
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

export default CreateRoom;
