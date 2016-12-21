import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Button from '../elements/forms/Button';
import Input from '../elements/forms/Input';

import userActions from '../../actions/userActions';

class UserCreate extends React.Component {

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
    return (
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

function mapDispatchToProps(dispatch) {
  return {
    createUser(newUser) {
      dispatch(userActions.createUserAsync(newUser));
    }
  };
}

export default connect(null, mapDispatchToProps)(UserCreate);
