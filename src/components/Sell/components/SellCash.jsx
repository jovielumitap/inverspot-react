import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { changeSellCash, changeSellCard } from '../../../redux/actions/sellActions';

import { cartProps } from '../../../propTypes/cartProps';
import discountProps from '../../../propTypes/discountProps';
import sellProps from '../../../propTypes/sellProps';

class SellCash extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    discount: discountProps.isRequired,
    sell: sellProps.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  getNewCashdValue = (event) => {
    let { value } = event.target;
    value = Number(value);

    const { card } = this.props.sell;
    const totalCart = this.props.cart.total;
    const totalDiscount = this.props.discount.haveDiscount ? this.props.discount.total : 0;
    const total = totalCart - totalDiscount - card;

    if (value >= total) {
      this.props.dispatch(changeSellCard(0));
    }

    if (value && value > 0) {
      this.props.dispatch(changeSellCash(value));
    }

    else {
      this.props.dispatch(changeSellCash(0));
    }
  }

  setNewCashValue = () => {
    const totalCart = this.props.cart.total;
    const totalDiscount = this.props.discount.haveDiscount ? this.props.discount.total : 0;

    const { card } = this.props.sell;
    let total = totalCart - totalDiscount - card;
    total = total < 0 ? 0 : total;
    total = Number(total.toFixed(2));
    this.props.dispatch(changeSellCash(total));
  }

  render() {
    return (
      <Container className="sell-cash">
        <Row>
          <div className="sell-cash__text totEfectivo">
            <span>
            Efectivo Recibido
            </span>
            <Input
              className="sell-cash__input"
              type="number"
              min="0"
              step="0.1"
              onChange={this.getNewCashdValue}
              placeholder={this.props.sell.cash}
            />
            {
              /*
              <Button color="info" onClick={this.setNewCardValue}>+ 1</Button>
              <Button color="info" onClick={this.setNewCardValue}>+ 10</Button>
              <Button color="info" onClick={this.setNewCardValue}>+ 50</Button>
              <Button color="info" onClick={this.setNewCardValue}>+ 200</Button>
              */
              <Button color="info" onClick={this.setNewCashValue}>+ Faltante</Button>
            }
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

export default connect(mapStateToProps)(SellCash);
