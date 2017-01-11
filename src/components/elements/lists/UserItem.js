import React from 'react';

class UserItem extends React.Component {

  render() {
    let isRotated = this.props.value ? 'flip-container-rotated' : null;

    return (
      <li>
        <div className="flip-container">
        	<div className={`flipper ${isRotated}`}>
        		<div className="front">
              test
        		</div>
        		<div className="back">
              {this.props.value}
        		</div>
        	</div>
        </div>
        <div>{this.props.userName}</div>
      </li>
    )
  }

}

export default UserItem;
