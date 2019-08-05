/* eslint-disable no-use-before-define */
import { updateProductsWithCart } from './productActions';
import { updateTotalDiscount } from './discountActions';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_ORDER_TO_CART = 'ADD_ORDER_TO_CART';
export const INCREASE_PRODUCT_IN_CART = 'INCREASE_PRODUCT_IN_CART';
export const DECREASE_PRODUCT_IN_CART = 'DECREASE_PRODUCT_IN_CART';
export const UPDATE_PRODUCT_PRICE_IN_CART = 'UPDATE_PRODUCT_PRICE_IN_CART';
export const UPDATE_PRODUCT_QTY_IN_CART = 'UPDATE_PRODUCT_QTY_IN_CART';
export const UPDATE_SERVICE_PRICE_BY_WEIGHT_CART = 'UPDATE_SERVICE_PRICE_BY_WEIGHT_CART';
export const REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const DELIVER_STATUS_CHANGE = 'DELIVER_STATUS_CHANGE';

export function addProductToCart(parentId, crmid, quantity = null) {
  return (dispatch, getState) => {
    const { product } = getState();
    const { productsById } = product;
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      parentId,
      crmid,
      productsById,
      quantity,
    });
    dispatch(updateProductsWithCart());
    dispatch(updateTotalDiscount());
    dispatch(updateServicePriceByWeightCart());
  };
}

export function addOrderToCart(order) {
  return (dispatch, getState) => {
    const { product } = getState();
    const productsById = { ...product.productsById };

    dispatch(clearCart());

    dispatch({
      type: ADD_ORDER_TO_CART,
      order,
      productsById,
    });
  };
}

export function increaseProductInCart(crmid) {
  return (dispatch) => {
    dispatch({
      type: INCREASE_PRODUCT_IN_CART,
      crmid,
    });
    dispatch(updateProductsWithCart());
    dispatch(updateTotalDiscount());
    dispatch(updateServicePriceByWeightCart());
  };
}

export function decreaseProductInCart(crmid) {
  return (dispatch) => {
    dispatch({
      type: DECREASE_PRODUCT_IN_CART,
      crmid,
    });
    dispatch(updateProductsWithCart());
    dispatch(updateTotalDiscount());
    dispatch(updateServicePriceByWeightCart());
  };
}

export function updateProductQuantityInCart(crmid, qty) {
  return (dispatch, getState) => {
    const { product } = getState();
    const { productsById } = product;
    dispatch({
      type: UPDATE_PRODUCT_QTY_IN_CART,
      crmid,
      qty,
      productsById,
    });
    dispatch(updateProductsWithCart());
    dispatch(updateTotalDiscount());
    dispatch(updateServicePriceByWeightCart());
  };
}

export function updateProductPriceInCart(crmid, price) {
  return (dispatch, getState) => {
    const { product } = getState();
    const { productsById } = product;
    dispatch({
      type: UPDATE_PRODUCT_PRICE_IN_CART,
      crmid,
      price,
      productsById,
    });
    dispatch(updateTotalDiscount());
  };
}

export function updateServicePriceByWeightCart() {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const { user } = authUser;
    const isValid = Object.prototype.hasOwnProperty.call(user, 'cen');
    if (isValid) {
      const { cen } = user;
      dispatch({
        type: UPDATE_SERVICE_PRICE_BY_WEIGHT_CART,
        cen,
      });
      dispatch(updateTotalDiscount());
    }
  };
}

export function removeProductInCart(crmid) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_IN_CART,
      crmid,
    });
    dispatch(updateProductsWithCart());
    dispatch(updateTotalDiscount());
    dispatch(updateServicePriceByWeightCart());
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
