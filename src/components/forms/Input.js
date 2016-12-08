import React from 'react';

class TextInput extends React.Component {

  static get propTypes() {
    return {
      type: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      name: React.PropTypes.string,
      value: React.PropTypes.string.isRequired,
      onChangeHandler: React.PropTypes.func.isRequired,
    }
  }

  static get defaultProps() {
    return {
      type: 'text',
      value: ''
    }
  }

  render() {
    return (
      <input
        className="default-input"
        type={this.props.type}
        placeholder={this.props.placeholder}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChangeHandler}
      />
    )
  }

}

export default TextInput;
