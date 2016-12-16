import React from 'react';

class UserList extends React.Component {

  generateList(list) {
    return list.map(function(item){
      return <li key={item.id}> {item.name} </li>
    })
  }

  render() {
    console.log(this.props.users)
    return (
      <ul>
        <div>{this.generateList(this.props.users)}</div>
      </ul>
    )
  }

}

export default UserList;
