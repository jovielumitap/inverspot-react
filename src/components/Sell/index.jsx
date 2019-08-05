import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { openModal } from '../../redux/actions/modalActions';

import { cartProps } from '../../propTypes/cartProps';

const Sell = ({ cart, dispatch }) => (
  <Button
    className="w-100 "
    color="primary"
    variant="contained"
    onClick={
      cart.totalProducts > 0 ? () => dispatch(openModal('sell')) : () => {}
    }
    disabled={cart.totalProducts < 1}
  >
    {'Cobrar'}
  </Button>
);

Sell.propTypes = {
  cart: cartProps.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Sell);
