import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <li>{this.props.elem} {this.props.value}</li>
    )
  }

}

export default ListItem;
