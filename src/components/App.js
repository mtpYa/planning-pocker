import React from 'react';
import request from 'superagent';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router'
import Button from './formElements/Button.js';
import Input from './formElements/Input.js';

import CreateRoom from './CreateRoom.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to='create-room'>Create Room</Link></li>
          <li><Link to='room'>Room</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }

}

export default App;
