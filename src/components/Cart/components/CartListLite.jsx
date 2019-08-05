import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Delete, DeleteForever, NotInterested } from '@material-ui/icons';

import { connect } from 'react-redux';
import {
  increaseProductInCart,
  decreaseProductInCart,
  /* updateProductPriceInCart, */
  removeProductInCart,
} from '../../../redux/actions/cartActions';
import authUserProps from '../../../propTypes/authUserProps';
import { cartProps } from '../../../propTypes/cartProps';

import {
  canIncreaseProductInCart,
  canDecreaseProductInCart,
  getTotalPrice,
} from '../../../helpers/cart';

class CartListLite extends PureComponent {
  static propTypes = {
    cart: cartProps.isRequired,
    tabs: PropTypes.object.isRequired,
    authUser: authUserProps.isRequired,
    dispatchRemoveProductInCart: PropTypes.func.isRequired,
    dispatchIncreaseProductInCart: PropTypes.func.isRequired,
    dispatchDecreaseProductInCart: PropTypes.func.isRequired,
    /* dispatchUpdateProductPriceInCart: PropTypes.func.isRequired, */
  }

  constructor(props) {
    super(props);
    this.noImage = `${process.env.PUBLIC_URL}/img/no_image.jpg`;
  }

  render() {
    const {
      cart,
      tabs,
      authUser,
      dispatchRemoveProductInCart,
      dispatchIncreaseProductInCart,
      dispatchDecreaseProductInCart,
    } = this.props;

    const orderNo = cart.orderSelected && cart.orderSelected.order ? cart.orderSelected.order.salesorder_no || cart.orderSelected.order.label : '';
    const { posTypeTab } = tabs;
    const isOrder = posTypeTab === 'Historico' && Boolean(orderNo);
    return (
      <Card>
        <CardBody className="cart__lite-fix-card-body">
          {cart.products.map(product => (
            <SwipeableViews
              enableMouseEvents
              resistance
              autoPlay
              index={1}
              key={`${this.constructor.name}-${product.parentId}-${
                product.crmid
              }`}
            >
              <div>
                <div className="cart__lite">
                  <button
                    className="cart__lite-delete"
                    type="button"
                    onClick={dispatchRemoveProductInCart}
                    data-crmid={product.crmid}
                    disabled={isOrder}
                  >
                    {isOrder ? (
                      <>
                        {'No se permite el borrado'}
                        <DeleteForever />
                      </>
                    ) : (
                      <>
                        {'Eliminar'}
                        <Delete />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <div className="cart__lite">
                  <span className="cart__lite-preview-img">
                    <img
                      src={product.image || this.noImage}
                      alt={product.nombre}
                    />
                    <span className="cart__lite-quantity">
                      {product.quantity}
                    </span>
                  </span>
                  <span className="cart__lite-name">
                    {product.productname}
                  </span>
                  <span className="cart__lite-price">
                    {`${getTotalPrice(product)}$`}
                  </span>
                </div>
              </div>

              <div>
                <div className="cart__lite">
                  {isOrder ? (
                    <div className="w-100 d-flex justify-content-around align-items-center">
                      <span>Orden no puede modificarse</span>
                      <NotInterested />
                    </div>
                  ) : (
                    <>
                      <span className="cart__lite-preview-img">
                        <img
                          src={product.image || this.noImage}
                          alt={product.nombre}
                        />
                        <span className="cart__lite-quantity">
                          {product.quantity}
                        </span>
                      </span>
                      <span>
                        <button
                          className="cart__lite-options cart__lite-decreaseProduct"
                          type="button"
                          data-crmid={product.crmid}
                          onClick={dispatchDecreaseProductInCart}
                          disabled={
                            canDecreaseProductInCart(product) === false
                          }
                        >
                          -
                        </button>
                        <input
                          className="cart__lite-input"
                          type="number"
                          min="1"
                          placeholder={product.quantity}
                        />
                        <button
                          className="cart__lite-options cart__lite-increaseProduct"
                          type="button"
                          data-crmid={product.crmid}
                          onClick={dispatchIncreaseProductInCart}
                          disabled={
                            canIncreaseProductInCart(authUser, product) === false
                          }
                        >
                          +
                        </button>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </SwipeableViews>
          ))}
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  tabs: state.tabs,
  authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
  dispatchRemoveProductInCart: (event) => {
    const { crmid } = event.currentTarget.dataset;
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
  /*
  dispatchUpdateProductPriceInCart: (event) => {
    const { crmid } = event.target.dataset;
    const price = Number(event.target.value);
    dispatch(updateProductPriceInCart(crmid, price));
  },
  */
});

export default connect(mapStateToProps, mapDispatchToProps)(CartListLite);
