import React from 'react';
import { connect } from 'react-redux';

class Room extends React.Component {

  render() {
    return (
      <h1>Room: {this.props.room.name}</h1>
    )
  }

}

function mapStateToProps(state) {
  return {
    room: state.room.currRoom
  };
}

export default connect(mapStateToProps)(Room);
