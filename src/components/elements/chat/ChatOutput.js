import React from 'react';
import { connect } from 'react-redux';

import SingleMessage from './ChatMessage';

class ChatOutput extends React.Component {

  render() {
    let messages = this.props.chatMessages.map((msg, idx) => {
      return <SingleMessage key={idx} msg={msg} />;
    });

    return (
      <div className='chatOutput'>
        {messages}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    chatMessages: state.chat.chatMessages
  };
}

export default connect(mapStateToProps)(ChatOutput);