import React from 'react';

class SingleCard extends React.Component {
  constructor(props) {
    super(props);

    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent() {
    this.props.onClickEvent(this.props.value);
  }

  render() {
    let isSelected = this.props.value === this.props.selectedValue ? 'selected' : null;
    let classes = `singleCard ${isSelected}`;
    return (
      <li
        className={classes}
        onClick={this.onClickEvent}
        >
        <span className='cardValue'>
          {this.props.value}
        </span>
      </li>
    );
  }
}

export default SingleCard;