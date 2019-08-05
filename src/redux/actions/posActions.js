import { toast } from 'react-toastify';

import { fetchAllCustomers } from './customerActions';

import {
  fetchAllProducts,
  clearAllFiltersProduct,
  getSubProducts,
} from './productActions';

import {
  fetchAllOrders,
  clearAllFiltersOrder,
} from './orderActions';

import {
  fetchAllCotizaciones,
  clearAllFiltersCotizacion,
} from './cotizarActions';

import { clearCart } from './cartActions';

import { openModal, closeModal } from './modalActions';
import { changeTab } from './tabActions';

import { CC, ACC } from './BalanceActions';
import { loading, loaded } from './loadActions';
import UserApi from '../../api/UserAPI';
/**
 * This function is a shortcode for fetch all products and orders
 * @returns {Promise}
 */
export const POS_FETCH_ALL = 'POS_FETCH_ALL';
export function fetchAll() {
  return async (dispatch) => {
    dispatch({ type: POS_FETCH_ALL });
    dispatch(fetchAllProducts());
    dispatch(fetchAllOrders());
    dispatch(fetchAllCotizaciones());
    dispatch(fetchAllCustomers());
  };
}

/**
 * This function is a shortcode for clear all filters
 * @returns {Promise}
 */
export const POS_CLEAR_ALL_FILTERS = 'POS_CLEAR_ALL_FILTERS';
export function clearAllFilters() {
  return async (dispatch) => {
    dispatch({ type: POS_CLEAR_ALL_FILTERS });
    dispatch(clearAllFiltersProduct());
    dispatch(clearAllFiltersOrder());
    dispatch(clearAllFiltersCotizacion());
  };
}

/**
 * This function is a shortcode for clear all filters filers and fetch all data
 * @returns {Promise}
 */
export const POS_REFRESH_ALL = 'POS_REFRESH_ALL';
export function refreshAll() {
  return async (dispatch) => {
    dispatch({ type: POS_REFRESH_ALL });
    dispatch(fetchAllOrders());
    dispatch(fetchAllProducts());
    dispatch(fetchAllCotizaciones());
    dispatch(clearAllFiltersProduct());
    dispatch(clearAllFiltersOrder());
    dispatch(clearAllFiltersCotizacion());
  };
}

/**
 * This function is a shortcode for clear all product filers and fetch all products
 * @returns {Promise}
 */
export const POS_REFRESH_PRODUCTS = 'POS_REFRESH_PRODUCTS';
export function refreshProducts() {
  return async (dispatch) => {
    dispatch({ type: POS_REFRESH_PRODUCTS });
    dispatch(clearAllFiltersProduct());
    dispatch(fetchAllProducts());
  };
}

/**
 * This function is a shortcode for clear all order filters and fetch all orders
 * @returns {Promise}
 */
export const POS_REFRESH_ORDERS = 'POS_REFRESH_ORDERS';
export function refreshOrders() {
  return async (dispatch) => {
    dispatch({ type: POS_REFRESH_PRODUCTS });
    dispatch(clearAllFiltersOrder());
    dispatch(fetchAllOrders());
  };
}

/**
 * This function is a shortcode for clear all order filters and fetch all orders
 * @returns {Promise}
 */
export const POS_REFRESH_COTIZACIONES = 'POS_REFRESH_COTIZACIONES';
export function refreshCotizaciones() {
  return async (dispatch) => {
    dispatch({ type: POS_REFRESH_COTIZACIONES });
    dispatch(clearAllFiltersCotizacion());
    dispatch(fetchAllCotizaciones());
  };
}

/**
 *
 * @param {String} modal
 * @param {Array} products
 * @returns {Function}
 * This function is a shortcode for open a modal and display sub products
 */
export const POS_OPEN_MODAL_AND_GET_SUB_PRODUCTS = 'POS_OPEN_MODAL_AND_GET_SUB_PRODUCTS';
export function openModalAndGetSubProducts(modal = 'options', products = []) {
  return (dispatch) => {
    dispatch({ type: POS_OPEN_MODAL_AND_GET_SUB_PRODUCTS });
    dispatch(openModal(modal));
    dispatch(getSubProducts(products));
  };
}

/**
 *
 * @param {Function} dispatch
 * @param {String} posType
 * This function is a helper
 */
function _changePosTypeTabAndClearCart(dispatch, posType) {
  dispatch(changeTab('posType', posType));
  dispatch(clearCart());
}

/**
 *
 * @returns {Function}
 * This function is a shortcode for change the posTypeTab to products and clear cart
 */
export const POS_CHANGE_POS_TYPE_TO_PRODUCTS_AND_CLEAR_CART = 'POS_CHANGE_POS_TYPE_TO_PRODUCTS_AND_CLEAR_CART';
export function changePosTypeTabToProductsAndClearCart() {
  return (dispatch) => {
    dispatch({ type: POS_CHANGE_POS_TYPE_TO_PRODUCTS_AND_CLEAR_CART });
    _changePosTypeTabAndClearCart(dispatch, 'Vender');
  };
}

/**
 *
 * @returns {Function}
 * This function is a shortcode for change the posTypeTab to orders and clear cart
 */
export const POS_CHANGE_POS_TYPE_TO_ORDERS_AND_CLEAR_CART = 'POS_CHANGE_POS_TYPE_TO_ORDERS_AND_CLEAR_CART';
export function changePosTypeTabToOrdersAndClearCart() {
  return (dispatch) => {
    dispatch({ type: POS_CHANGE_POS_TYPE_TO_ORDERS_AND_CLEAR_CART });
    _changePosTypeTabAndClearCart(dispatch, 'Historico');
  };
}

/**
 *
 * @returns {Function}
 * This function is a shortcode for change the posTypeTab to orders and clear cart
 */
export const POS_CHANGE_POS_TYPE_TO_COTIZACIONES_AND_CLEAR_CART = 'POS_CHANGE_POS_TYPE_TO_COTIZACIONES_AND_CLEAR_CART';
export function changePosTypeTabToCotizacionesAndClearCart() {
  return (dispatch) => {
    dispatch({ type: POS_CHANGE_POS_TYPE_TO_COTIZACIONES_AND_CLEAR_CART });
    _changePosTypeTabAndClearCart(dispatch, 'Cotizaciones');
  };
}

/**
 *
 * @returns {Function}
 * This function is a shortcode for back to products view
 */
export const POS_BACK_TO_PRODUCTS = 'POS_BACK_TO_PRODUCTS';
export function backToProducts() {
  return (dispatch) => {
    dispatch({ type: POS_BACK_TO_PRODUCTS });
    dispatch(changeTab('posProduct', 'product'));
    dispatch(changeTab('posType', 'productos'));
  };
}

/**
 *
 * @returns {Function}
 * This function is a shortcode for back to products view
 */
export const POS_BACK_TO_ORDERS = 'POS_BACK_TO_ORDERS';
export function backToOrders() {
  return (dispatch) => {
    dispatch({ type: POS_BACK_TO_ORDERS });
    dispatch(changeTab('posProduct', 'product'));
    dispatch(changeTab('posType', 'ventas'));
  };
}

/**
 *
 * @returns {Function}
 * Request information to create a CC
 */
export const POS_GET_CC = 'POS_GET_CC';
export function getCC(modal = 'balance', action, value) {
  return (dispatch) => {
    dispatch({ type: POS_GET_CC });
    dispatch(openModal(modal));
    switch (action) {
      case 'cc':
        dispatch(CC(value));
        break;
      case 'ACC':
        dispatch(ACC());
        break;
      default:
        dispatch(null);
        break;
    }
  };
}

/**
 *
 * @returns {Function}
 * Request information to create a CC
 */
export const POS_SEND_EMAIL = 'POS_SEND_EMAIL';
export function sendEmail(data) {
  const target = 'sendEmail';
  return async (dispatch) => {
    dispatch({ type: POS_SEND_EMAIL });
    dispatch(loading(target));
    const userApi = new UserApi();
    const response = await userApi.sendEmail(data);
    const { success } = response;

    if (success) {
      dispatch(closeModal(target));
      toast.success('Envio Exitoso');
    }

    else {
      toast.error('Error Al Enviar');
    }

    console.log({ response });
    dispatch(loaded(target));
  };
}
