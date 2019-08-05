import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { changeSellCard } from '../../../redux/actions/sellActions';

import { cartProps } from '../../../propTypes/cartProps';
import discountProps from '../../../propTypes/discountProps';
import sellProps from '../../../propTypes/sellProps';

class SellCard extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    discount: discountProps.isRequired,
    sell: sellProps.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  getNewCardValue = (event) => {
    let { value } = event.target;
    value = Number(value);

    const totalCart = this.props.cart.total;
    const totalDiscount = this.props.discount.haveDiscount ? this.props.discount.total : 0;
    const total = totalCart - totalDiscount;

    const { cash } = this.props.sell;
    const toPay = total - cash < 0 ? 0 : total - cash;

    if (value > toPay) {
      this.props.dispatch(changeSellCard(toPay));
    }

    else {
      this.props.dispatch(changeSellCard(value));
    }
  }

  setNewCardValue = () => {
    const totalCart = this.props.cart.total;
    const totalDiscount = this.props.discount.haveDiscount ? this.props.discount.total : 0;

    const { cash } = this.props.sell;
    let total = totalCart - totalDiscount - cash;
    total = total < 0 ? 0 : total;

    total = Number.parseFloat(total.toFixed(2));

    this.props.dispatch(changeSellCard(total));
  }

  render() {
    return (
      <Container className="sell-card totCubrir">
        <Row>
          <div className="sell-cash__text totEfectivo">
            <span>
            Tarjeta recibido
            </span>
            <Input
              className="sell-card__input"
              type="number"
              min="0"
              step="0.1"
              onChange={this.getNewCardValue}
              placeholder={this.props.sell.card}
            />
            <Button color="info" onClick={this.setNewCardValue}>+ Faltante</Button>
          </div>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  discount: state.discount,
  sell: state.sell,
});

export default connect(mapStateToProps)(SellCard);
