import React from 'react';
import request from 'superagent';
import Button from './formElements/Button.js';
import Input from './formElements/Input.js';

class App extends React.Component {

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
    console.log(this.state.value)
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
    );
  }

}

export default App;
