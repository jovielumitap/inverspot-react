import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadsProps from '../../propTypes/loadsProps';
import { cartProps } from '../../propTypes/cartProps';

import LoadComponent from '../Load/LoadComponent';

import Sell from '../Sell';
import Deliver from '../Deliver';
import Refund from '../Refund';

import {
  shouldCharge,
  shouldDeliver,
  shoulrRefoundMoney,
  shoulrRefoundProducts,
} from '../../helpers/order';

const SalesOffer = ({
  cart,
  loads,
  authUser,
}) => {
  const { orderSelected } = cart;
  const almacen = orderSelected.cartStateWarehouse || '';
  // eslint-disable-next-line camelcase
  const { user: { config: { pos_auto_alm } } } = authUser;
  const { balance, total } = orderSelected;

  return (
    <div className="salesOffer">
      <div className="w-100 d-flex justify-content-between">
        <div className="w-100 d-flex flex-column">
          { pos_auto_alm !== 'Preguntar' ? shouldDeliver(almacen) && (<Deliver />) : null }
          {shouldCharge(balance) && (<Sell />)}
          {
            <div className="mt-2 w-100 d-flex align-items-center justify-content-around">
              {shoulrRefoundMoney(balance, total) && (<Refund type="money" />)}
              {shoulrRefoundProducts(almacen) && (<Refund type="products" />)}
            </div>
          }
          {loads.deliverIsLoading && <LoadComponent />}
        </div>
      </div>
    </div>
  );
};

SalesOffer.propTypes = {
  cart: cartProps.isRequired,
  loads: loadsProps.isRequired,
  authUser: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  loads: state.loads,
  authUser: state.authUser,
});

export default connect(
  mapStateToProps,
)(SalesOffer);
