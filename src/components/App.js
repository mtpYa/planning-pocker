import React from 'react';
import request from 'superagent';
import Button from './forms/Button.js';
import Input from './forms/Input.js';
import Header from './layouts/Header.js';
import CreateRoom from './pages/CreateRoom.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }

}

export default App;
