import React from 'react';
import ListItem from './ListItem';
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
      case 'listItem':
        return (
          <ListItem
            key={item.id}
            elem={item.name}
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
