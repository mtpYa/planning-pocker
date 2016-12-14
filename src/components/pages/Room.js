import React from 'react';
import { connect } from 'react-redux';

import io from 'socket.io-client';
let socket;

import ModuleUserCreate from '../layouts/ModuleUserCreate.js';

class Room extends React.Component {

  componentDidMount() {
    socket = io('http://localhost:3000');
    socket.on('event', data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <h1>Room: {this.props.room.name}</h1>
        <ModuleUserCreate />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    room: state.room.currRoom
  };
}

export default connect(mapStateToProps)(Room);
