import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

  render() {
    let lst = this.props.elems.map( (item) => {
      return (
        <ListItem
          key={item.id}
          elem={item.name}
        />
      )
    })
    return (
      <ul>
        {lst}
      </ul>
    )
  }

}

export default List;
