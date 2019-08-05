import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { removeDiscount } from '../../redux/actions/discountActions';

import { cartProps } from '../../propTypes/cartProps';
import discountProps from '../../propTypes/discountProps';
import { formatMoney } from '../../helpers/tools';

import Offer from '../../components/Offer';
import Sell from '../Sell';
import SalesOffer from '../SalesOffer';
import SellModal from '../Sell/components/SellModal';

const getTotal = (discount, cart) => {
  let { total } = cart;
  if (discount.haveDiscount) {
    total = (total - discount.total).toFixed(2);
    total = Number.parseFloat(total);
  }
  return formatMoney(total);
};

const Payment = ({ discount, cart, dispatchRemoveDiscount, tabs }) => (
  <div className="payment_container">
    <Paper>
      <div className="payment">
        <div className="payment__mount">
          <h5 className="payment__sub-total">
            {`Sub-total: $${formatMoney(cart.subTotal)}`}
          </h5>
          <h5 className="payment__sub-total">
            {`IVA-total: $${formatMoney(cart.totalIva)}`}
          </h5>
          {
            discount.haveDiscount && (
              <div className="payment__discount-container">
                <Row>
                  <Col sm={3}>
                    <div>
                      {`Descuento: ${discount.name}`}
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div>
                      {`${discount.fixed || 0}`}
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div>
                      {`${discount.percentage || 0}%`}
                    </div>
                  </Col>
                  <Col sm={3}>
                    <button type="button" className="payment__discount-delete" onClick={dispatchRemoveDiscount}>
                      <FontAwesomeIcon icon="trash-alt" />
                    </button>
                  </Col>
                </Row>
              </div>
            )
          }
          <h4 className="payment__total">
            {`Precio Total: $${getTotal(discount, cart)}`}
          </h4>
          <h4 className="payment__total text-left">
            {`Peso Total: ${cart.totalWeight} Kg`}
          </h4>
        </div>
      </div>
    </Paper>
    <Paper className="mt-2 rounded  ">
      <SellModal />
      {tabs.posTypeTab === 'Vender' ?
        <div className="payment__pay p-2">
          <Offer />
          <div className="payment__purchase">
            <Sell />
          </div>
        </div>
        :
        <div className="salesOffer_container p-4 actions_order_product">
          <SalesOffer />
        </div>
      }
    </Paper>
  </div>
);

Payment.propTypes = {
  tabs: PropTypes.object.isRequired,
  cart: cartProps.isRequired,
  discount: discountProps.isRequired,
  dispatchRemoveDiscount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  discount: state.discount,
  tabs: state.tabs,
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveDiscount: () => (
    dispatch(removeDiscount())
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
