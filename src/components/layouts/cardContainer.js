import React from 'react';
import { connect } from 'react-redux';

import cardsActions from '../../actions/cardsActions';

import List from '../elements/lists/List.js';


class CardContainer extends React.Component {

  constructor(props) {
    super(props);

    this.onClickEvent = this.onClickEvent.bind(this);
  }

  onClickEvent(cardValue) {
    this.props.setSelected(cardValue);
  }

  render() {
    return (
      <div>
        <h3>List of cards to choose</h3>
        <List
          elems={this.props.cards}
          elemName='cardItem'
          listClass='horizontal_list'
          clickEvent={this.onClickEvent}
          selectedCard={this.props.selectedCard}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cardsList,
    selectedCard: state.cards.selectedCard
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelected(cardValue) {
      dispatch(cardsActions.setSelected(cardValue));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);