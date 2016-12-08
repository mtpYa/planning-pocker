import React from 'react';

class Button extends React.Component {

  static get propTypes() {
    return {
      type: React.PropTypes.string,
      value: React.PropTypes.string.isRequired,
      onHandleClick: React.PropTypes.func.isRequired,
    }
  }

  static get defaultProps() {
    return {
      type: 'button'
    }
  }

  render() {
    return (
      <input
        className="default-button"
        type={this.props.type}
        value={this.props.value}
        onClick={this.props.onHandleClick}
      />
    )
  }

}

export default Button;
