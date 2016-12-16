import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Button from '../forms/Button.js';
import Input from '../forms/Input.js';

import userActions from '../../actions/userActions';

class ModuleUserCreate extends React.Component {

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
    this.props.createUser({
      name: this.state.value,
      roomId: this.props.location.query.id
    });
  }

  render() {
    return this.props.user.name
    ? null : (
      <div>
        <Input
          placeholder="enter your name"
          name="user-name"
          type="text"
          value={this.state.value}
          onChangeHandler={this.handleChange}
        />
        <Button
          value="Create User"
          type="submit"
          onHandleClick={this.handleClick}
        />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user.currUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser(newUser) {
      dispatch(userActions.createUserAsync(newUser));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModuleUserCreate);
