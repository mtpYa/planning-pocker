import React from 'react';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      pass: '',
      loginInfo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({
        name: e.target.value
      });
    } else {
      this.setState({
        pass: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    request
      .post('/login')
      .send({ username: this.state.name, password: this.state.pass })
      .end((err, res) => {
        this.setState({
          loginInfo: 'You are logged as ' + res.body.name
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.pass}
            onChange={this.handleChange}
            />
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.loginInfo}</h2>
      </div>
    );
  }
}

export default App;
