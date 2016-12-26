import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <li>{this.props.elem}</li>
    )
  }

}

export default ListItem;
