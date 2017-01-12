import React from 'react';

class UserItem extends React.Component {

  render() {
    let isRotated = this.props.value ? 'flip-container-rotated' : null;
    console.log('asd', this.props.extraValues);
    let maxValue = this.props.value === this.props.extraValues.max ? 'max-value' : null
    let minValue = this.props.value === this.props.extraValues.min ? 'min-value' : null
    console.log(maxValue, minValue)
    return (
      <li>
        <div className="flip-container">
        	<div className={`flipper ${isRotated}`}>
        		<div className="front">
              test
        		</div>
        		<div className="back">
              {this.props.value}
              {maxValue} {minValue}
        		</div>
        	</div>
        </div>
        <div>{this.props.userName}</div>
      </li>
    )
  }

}

export default UserItem;
