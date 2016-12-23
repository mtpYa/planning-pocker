import React from 'react';
import List from './List';

class ListItem extends React.Component {

  render() {
    return (
      <li>{this.props.elem}</li>
    )
  }

}

export default ListItem;
