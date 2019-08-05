/* eslint-disable object-curly-newline */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';

import { DeleteForever } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';

import {
  increaseProductInCart,
  decreaseProductInCart,
  updateProductPriceInCart,
  removeProductInCart,
  updateProductQuantityInCart,
} from '../../../redux/actions/cartActions';
import { changeSellOrderStatusAuthUser } from '../../../redux/actions/authUserActions';
import { fetchTimbrado } from '../../../redux/actions/TimbrarActions';
import { openModal, closeModal } from '../../../redux/actions/modalActions';
import { addItemsToTable } from '../../../redux/actions/tableActions';
import { changeSalesOrderStatus, saveSell } from '../../../redux/actions/sellActions';
import { sendEmail } from '../../../redux/actions/posActions';

import { formatMoney } from '../../../helpers/tools';

import { cartProps } from '../../../propTypes/cartProps';
import authUserProps from '../../../propTypes/authUserProps';

import {
  canIncreaseProductInCart,
  canDecreaseProductInCart,
  getTotalPrice,
} from '../../../helpers/cart';

import { shoulrRefoundMoney, shoulrRefoundProducts } from '../../../helpers/order';

import CartState from './CartState';

const styles = theme => ({
  paperRoot: {
    padding: 25,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    height: '55vh',
    overflowY: 'auto',
  },
  noPadding: {
    padding: 0,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

class CartList extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    authUser: authUserProps.isRequired,
    tabs: PropTypes.object.isRequired,
    loads: PropTypes.object.isRequired,
    modals: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    customer: PropTypes.object.isRequired,
    dispatchRemoveProductInCart: PropTypes.func.isRequired,
    dispatchIncreaseProductInCart: PropTypes.func.isRequired,
    dispatchDecreaseProductInCart: PropTypes.func.isRequired,
    dispatchUpdateProductPriceInCart: PropTypes.func.isRequired,
    dispatchUpdateProductQtyInCart: PropTypes.func.isRequired,
    dispatchFetchTimbrado: PropTypes.func.isRequired,
    dispatchChangeSellOrderStatusAuthUser: PropTypes.func.isRequired,
    dispatchOpenRefundModal: PropTypes.func.isRequired,
    dispatchOpenCheckOutRefunModal: PropTypes.func.isRequired,
    dispatchMakeSell: PropTypes.func.isRequired,
    dispatchSendEmail: PropTypes.func.isRequired,
    dispatchOpenSendEmaillModal: PropTypes.func.isRequired,
    dispatchCloseSendEmaillModal: PropTypes.func.isRequired,
  }

  constructor(...props) {
    super(...props);
    this.state = { rowClasses: {} };
  }

  componentWillReceiveProps(nextProps) {
    const { cart } = this.props;
    const { rowClasses } = this.state;
    let newRowClsses = {};

    const oldCart = { ...cart };
    const nextCart = { ...nextProps.cart };

    const oldCartProductsById = { ...oldCart.cartProductsById };

    nextCart.products.forEach((product) => {
      const { crmid } = product;

      /* is new */
      if (!(crmid in rowClasses)) {
        newRowClsses = { ...newRowClsses, [crmid]: 'tRow-fix animated slideInDown' };
      }

      /* exist */
      else {
        newRowClsses = { ...newRowClsses, [crmid]: 'tRow-fix' };
      }

      if (crmid in oldCartProductsById) {
        const oldProduct = oldCartProductsById[crmid];
        /* update */
        if (oldProduct.quantity !== product.quantity) {
          newRowClsses = { ...newRowClsses, [crmid]: 'tRow-fix animated pulse' };
        }
      }
    });

    this.setState({ rowClasses: newRowClsses });
  }

  render() {
    const {
      cart,
      cart: { orderSelected },
      tabs,
      authUser,
      loads,
      modals,
      classes,
      customer,
      dispatchRemoveProductInCart,
      dispatchIncreaseProductInCart,
      dispatchDecreaseProductInCart,
      dispatchUpdateProductPriceInCart,
      dispatchUpdateProductQtyInCart,
      dispatchFetchTimbrado,
      dispatchChangeSellOrderStatusAuthUser,
      dispatchOpenRefundModal,
      dispatchOpenCheckOutRefunModal,
      dispatchMakeSell,
      dispatchSendEmail,
      dispatchOpenSendEmaillModal,
      dispatchCloseSendEmaillModal,
    } = this.props;
    const { rowClasses } = this.state;
    const orderStatuses = authUser.user.sostatus;
    const currentOrderStatus = authUser.user.config.sostatus;

    const orderNo = cart.orderSelected && cart.orderSelected.order ? (cart.orderSelected.order.salesorder_no || cart.orderSelected.order.label) : '';
    const orderId = cart.orderSelected && cart.orderSelected.order ? cart.orderSelected.order.crmid : '';

    const almacen = cart.orderSelected ? cart.orderSelected.cartStateWarehouse : '';
    const balance = cart.orderSelected ? cart.orderSelected.balance : 0;
    const total = cart.orderSelected ? cart.orderSelected.total : 0;

    return (
      <Paper className={`PaperCartList ${classes.paperRoot}`}>
        <div className="cart-state-__container">
          <CartState
            orderNo={orderNo}
            orderId={orderId}
            customer={customer}
            orderStatuses={orderStatuses}
            currentOrderStatus={currentOrderStatus}
            shoulrRefoundMoney={shoulrRefoundMoney(balance, total)}
            shoulrRefoundProducts={shoulrRefoundProducts(almacen || '')}
            changeCurrentOrderStatus={(ordeStatus) => {
              dispatchChangeSellOrderStatusAuthUser(ordeStatus);
            }}
            timbrar={() => {
              dispatchFetchTimbrado(orderId);
            }}
            openRefundModal={dispatchOpenRefundModal}
            openCheckOutRefunModal={dispatchOpenCheckOutRefunModal}
            saveSell={() => {
              dispatchMakeSell(currentOrderStatus);
            }}
            posType={tabs.posTypeTab}
            sendEmail={dispatchSendEmail}
            sendEmailIsLoading={Boolean(loads.sendEmailIsLoading)}
            sendEmailIsOpen={Boolean(modals.sendEmailModalIsOpen)}
            openEmailModal={() => {
              dispatchOpenSendEmaillModal();

            }}
            closeMailModal={dispatchCloseSendEmaillModal}
          />
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className={classes.noPadding}>Nombre</TableCell>
              <TableCell align="center" className={classes.noPadding}>Cantidad</TableCell>
              <TableCell align="center" className={classes.noPadding}>Precio</TableCell>
              <TableCell align="center" className={classes.noPadding}>Total</TableCell>
              <TableCell align="center" className={classes.noPadding} />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cart.products.map(product => (
                <TableRow
                  key={`CartList-${product.parentId}-${product.crmid}`}
                  className={rowClasses[product.crmid]}
                >
                  <TableCell className={classes.noPadding}>
                    <div>{product.productname}</div>
                    <div>{product.opcion}</div>
                  </TableCell>
                  <TableCell className={classes.noPadding}>
                    {JSON.stringify(orderSelected) === JSON.stringify({})
                      ? (
                        <button
                          type="button"
                          className="cart__increase-decrease-product"
                          data-crmid={product.crmid}
                          onClick={
                            canDecreaseProductInCart(product)
                              ? dispatchDecreaseProductInCart
                              : () => {}
                          }
                          disabled={canDecreaseProductInCart(product) === false}
                        >
                          <>-</>
                        </button>
                      )
                      : null
                    }
                    <input
                      value={product.quantity}
                      style={{ width: '50px', textAlign: 'center' }}
                      type="number"
                      onChange={dispatchUpdateProductQtyInCart}
                      data-crmid={product.crmid}
                      disabled={JSON.stringify(orderSelected) !== JSON.stringify({})}
                      autoFocus
                    />
                    {JSON.stringify(orderSelected) === JSON.stringify({})
                      ? (
                        <button
                          type="button"
                          className="cart__increase-decrease-product"
                          data-crmid={product.crmid}
                          onClick={
                            canIncreaseProductInCart(authUser, product)
                              ? dispatchIncreaseProductInCart
                              : () => {}
                          }
                          disabled={canIncreaseProductInCart(authUser, product) === false}
                        >
                          <>+</>
                        </button>
                      )
                      : null
                    }
                  </TableCell>
                  <TableCell className={classes.noPadding}>
                    <input
                      style={{ width: '75px' }}
                      placeholder={product.unit_price}
                      type="number"
                      min="1"
                      disabled={JSON.stringify(orderSelected) !== JSON.stringify({})}
                      onKeyUp={dispatchUpdateProductPriceInCart}
                      data-crmid={product.crmid}
                    />
                  </TableCell>
                  <TableCell className={classes.noPadding}>
                    {
                      `$ ${formatMoney(getTotalPrice(product))}`
                    }
                  </TableCell>
                  {JSON.stringify(orderSelected) === JSON.stringify({})
                    ? (
                      <TableCell align="center" className={classes.noPadding}>
                        <div className="position-relative">
                          <DeleteForever />
                          <button
                            type="button"
                            className="cart__table-btn"
                            onClick={dispatchRemoveProductInCart}
                            data-crmid={product.crmid}
                          />
                        </div>
                      </TableCell>
                    )
                    : null
                  }
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  tabs: state.tabs,
  loads: state.loads,
  modals: state.modals,
  authUser: state.authUser,
  customer: state.customer,
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveProductInCart: (event) => {
    const { crmid } = event.target.dataset;
    dispatch(removeProductInCart(crmid));
  },
  dispatchIncreaseProductInCart: (event) => {
    const { crmid } = event.target.dataset;
    dispatch(increaseProductInCart(crmid));
  },
  dispatchDecreaseProductInCart: (event) => {
    const { crmid } = event.target.dataset;
    dispatch(decreaseProductInCart(crmid));
  },
  dispatchUpdateProductPriceInCart: (event) => {
    const { crmid } = event.target.dataset;
    const price = Number(event.target.value);
    dispatch(updateProductPriceInCart(crmid, price));
  },
  dispatchUpdateProductQtyInCart: (event) => {
    const { crmid } = event.target.dataset;
    const qty = Number(event.target.value);
    dispatch(updateProductQuantityInCart(crmid, qty));
  },

  dispatchFetchTimbrado: crmid => dispatch(fetchTimbrado(crmid)),
  dispatchChangeSellOrderStatusAuthUser: orderStatus => dispatch(changeSellOrderStatusAuthUser(orderStatus)),

  dispatchOpenRefundModal: () => {
    dispatch(openModal('refund'));
    dispatch(addItemsToTable('refund'));
  },
  dispatchOpenCheckOutRefunModal: () => dispatch(openModal('checkoutRefound')),
  dispatchMakeSell: (orderStatus) => {
    dispatch(changeSalesOrderStatus(orderStatus));
    dispatch(saveSell());
  },

  dispatchOpenSendEmaillModal: () => dispatch(openModal('sendEmail')),
  dispatchCloseSendEmaillModal: () => dispatch(closeModal('sendEmail')),
  dispatchSendEmail: data => dispatch(sendEmail(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartList));
