import React from 'react';

class SingeMessage extends React.Component {

  static get propTypes() {
    return {
      msg: React.PropTypes.object.isRequired
    };
  }

  render() {
    return (
      <div className='chatMessage'>
        <span className='chatName'>{this.props.msg.name}</span>
        :
        <span className='chatText'>{this.props.msg.message}</span>
      </div>
    );
  }

}

export default SingeMessage;