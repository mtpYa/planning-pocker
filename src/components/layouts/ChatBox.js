import React from 'react';
import { connect } from 'react-redux';

import ChatOutput from '../elements/chat/ChatOutput';
import Input from '../elements/forms/Input';
import Button from '../elements/forms/Button';

import chatActions from '../../actions/chatAction';

class ChatBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static get propTypes() {
    return {
      socket: React.PropTypes.object.isRequired
    };
  }

  componentDidMount() {
    this.props.socket.on('showMessage', message => {
      this.props.addMessage(message);
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick() {
    console.log({
      name: this.props.user.name,
      message: this.state.value
    });
    this.props.socket.emit('newMessage', {
      name: this.props.user.name,
      message: this.state.value
    });
  }

  render() {
    return (
      <div className='chatContainer'>
        <ChatOutput />
        <div className='chatInput'>
          <Input
            placeholder="type your message"
            name="chat-message"
            type="text"
            value={this.state.value}
            onChangeHandler={this.handleChange}
          />
          <Button
            value="Apply"
            type="submit"
            onHandleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    room: state.room.currRoom,
    user: state.user.currUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage(message) {
      dispatch(chatActions.addMessage(message));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);