import React from 'react';
import UserItem from './UserItem';
import CardItem from './CardItem';

class List extends React.Component {

  constructor(props) {
    super(props);

    this.chooseElem = this.chooseElem.bind(this);
  }

  render() {
    let lst = this.props.elems.map((elem, idx) => {
      return this.chooseElem(elem, idx);
    });
    return (
      <ul className={this.props.listClass}>
        {lst}
      </ul>
    )
  }

  chooseElem(item, idx) {
    switch (this.props.elemName) {
      case 'userItem':
        return (
          <UserItem
            key={item.id}
            userName={item.name}
            value={item.value}
            />
        )
        break;
      case 'cardItem':
        return (
          <CardItem
            key={idx}
            value={item}
            selectedValue={this.props.selectedCard}
            onClickEvent={this.props.clickEvent}
            />
        )
        break;
    }
  }

}

export default List;
