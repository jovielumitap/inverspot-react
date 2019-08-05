import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

/* Temporal */
import { connect } from 'react-redux';
import { addDiscount, removeDiscount } from '../../../redux/actions/discountActions';
import { openModal, closeModal } from '../../../redux/actions/modalActions';

import { cartProps } from '../../../propTypes/cartProps';
import discountProps from '../../../propTypes/discountProps';

import { formatMoney } from '../../../helpers/tools';

import Discount from '../../Discount';

const getTotal = (discount, cart) => {
  let { total } = cart;
  if (discount.haveDiscount) {
    total = (total - discount.total).toFixed(2);
    total = Number.parseFloat(total);
  }
  return formatMoney(total);
};

const CartTotal = ({
  tabs,
  cart,
  discount,
  modals,
  dispatchRemoveDiscount,
  dispatchOpenDiscountModal,
  dispatchCloseDiscountModal,
  dispatchAddDiscount,
}) => {
  const [isCollapse, toggleCollapse] = useState(false);
  const { posTypeTab } = tabs;
  return (
    <Paper>
      <div className="payment">
        <div className="payment__mount">
          <Collapse in={isCollapse} timeout="auto" unmountOnExit>
            <h5 className="payment__sub-total text-left ">
              {`Peso Total: ${cart.totalWeight} Kg`}
            </h5>
            <h5 className="payment__sub-total">
              {`Sub-total: $${formatMoney(cart.subTotal)}`}
            </h5>
            <h5 className="payment__sub-total">
              {`IVA-total: $${formatMoney(cart.totalIva)}`}
            </h5>
            {
              discount.haveDiscount && (
                <div className="payment__discount-container">
                  <Grid container>
                    <Grid item sm={3}>
                      <div>
                        {`Descuento: ${discount.name}`}
                      </div>
                    </Grid>
                    <Grid item sm={3}>
                      <div>
                        {`${discount.fixed || 0}`}
                      </div>
                    </Grid>
                    <Grid item sm={3}>
                      <div>
                        {`${discount.percentage || 0}%`}
                      </div>
                    </Grid>
                    <Grid item sm={3}>
                      <button type="button" className="payment__discount-delete" onClick={dispatchRemoveDiscount}>
                        <DeleteForeverIcon />
                      </button>
                    </Grid>
                  </Grid>
                </div>
              )
            }
          </Collapse>
          <hr />
          <div className="payment__total-container">
            <Collapse in={posTypeTab === 'Vender'}>
              <Discount
                isOpen={Boolean(modals.discountModalIsOpen)}
                onOpen={dispatchOpenDiscountModal}
                onClose={dispatchCloseDiscountModal}
                isLoading={false}
                onSave={(data) => {
                  dispatchAddDiscount(data);
                  dispatchCloseDiscountModal();
                }}
                totalToPay={cart.total}
              />
            </Collapse>
            <div>
              <Button
                className="payment__total"
                onClick={() => { toggleCollapse(!isCollapse); }}
              >
                { `Precio Total: $${getTotal(discount, cart)}` }
                {
                  isCollapse
                    ? <KeyboardArrowUpIcon />
                    : <KeyboardArrowDownIcon />
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

CartTotal.propTypes = {
  tabs: PropTypes.object.isRequired,
  cart: cartProps.isRequired,
  discount: discountProps.isRequired,
  modals: PropTypes.object.isRequired,
  dispatchRemoveDiscount: PropTypes.func.isRequired,
  dispatchOpenDiscountModal: PropTypes.func.isRequired,
  dispatchCloseDiscountModal: PropTypes.func.isRequired,
  dispatchAddDiscount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  discount: state.discount,
  modals: state.modals,
  tabs: state.tabs,
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveDiscount: () => (
    dispatch(removeDiscount())
  ),
  dispatchOpenDiscountModal: () => dispatch(openModal('discount')),
  dispatchCloseDiscountModal: () => dispatch(closeModal('discount')),
  dispatchAddDiscount: discount => dispatch(addDiscount(discount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
