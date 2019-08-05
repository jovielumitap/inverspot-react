import { toast } from 'react-toastify';
import OrderApi from '../../api/OrderAPI';
import TableAPI from '../../api/TableAPI';
import { loading, loaded } from './loadActions';
import { addOrderToCart, clearCart } from './cartActions';
import { selectCustomer } from './customerActions';
import { closeModal } from './modalActions';

export const ADD_ORDERS = 'ADD_ORDERS';
export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const GET_ORDERS_BY_PAGE = 'GET_ORDERS_BY_PAGE';
export const FILTER_ORDERS = 'FILTER_ORDERS';
export const SELECT_ORDER = 'SELECT_ORDER';
export const SET_MULTIFILTER_ORDER = 'SET_MULTIFILTER_ORDER';
export const REMOVE_MULTIFILTER_ORDER = 'REMOVE_MULTIFILTER_ORDER';
export const CLEAR_MULTIFILTER_ORDER = 'CLEAR_MULTIFILTER_ORDER';
export const FETCH_FILTER = 'FETCH_FILTER';

export function addOrders(orders) {
  return {
    type: ADD_ORDERS,
    orders,
  };
}

export function getOrdersByPage(page = 0) {
  return async (dispatch) => {
    dispatch(loading('order'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: GET_ORDERS_BY_PAGE,
        page,
      });
    } catch {
      /* Continue regardless of error */
    } finally {
      dispatch(loaded('order'));
    }
  };
}

export function fetchFilter() {
  return async (dispatch, getState) => {
    const { order } = getState();
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({ type: FETCH_FILTER, order });
    } catch (err) {
      console.log('fetchFilter err: ', err);
    }
  };
}

export function setMultiFilterOrder(item) {
  return async (dispatch, getState) => {
    const { order } = getState();
    const { filters } = order;
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: SET_MULTIFILTER_ORDER,
        filters,
        item,
      });
    } catch (err) {
      console.log('setMultiFilterOrder err: ', err);
    }
  };
}

export function removeMultiFilterOrder(word) {
  return async (dispatch, getState) => {
    const { order } = getState();
    const { filters } = order;
    dispatch(loading('order'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: REMOVE_MULTIFILTER_ORDER,
        filters,
        word,
      });
    } catch (err) {
      console.log('removeMultiFilter err: ', err);
    } finally {
      dispatch(loaded('order'));
    }
  };
}

export function clearAllFiltersOrder() {
  return {
    type: CLEAR_MULTIFILTER_ORDER,
  };
}

export function fetchAllOrders() {
  const orderApi = new OrderApi();
  return async (dispatch) => {
    dispatch(loading('order'));
    dispatch({
      type: FETCH_ALL_ORDERS,
    });
    try {
      const response = await orderApi.getAll();
      dispatch(addOrders(response.result));
    } catch (err) {
      dispatch(addOrders([]));
    } finally {
      dispatch(clearAllFiltersOrder());
      dispatch(loaded('order'));
    }
  };
}

export function selectOrder(crmid) {
  return async (dispatch, getState) => {
    const { order, customer } = getState();
    const { customersByArray } = customer;
    const foundOrder = order.orders.find(element => element.crmid === crmid);
    const crmidUser = foundOrder.account_id.substring(3);
    const foundCustomer = customersByArray.find(item => item.crmid === crmidUser);
    dispatch({ type: SELECT_ORDER });
    await dispatch(addOrderToCart(foundOrder));
    await dispatch(selectCustomer(foundCustomer));
  };
}

export function filterOrder(word) {
  return async (dispatch, getState) => {
    dispatch(loading('order'));
    const { tabs } = getState();
    try {
      await new Promise(resolve => setTimeout(resolve));
      switch (tabs.posDisplayTab) {
        case 'grid':
          dispatch({
            type: FILTER_ORDERS,
            word,
          });
          break;
        case 'list':
          dispatch(setMultiFilterOrder({ title: 'search', value: word, type: 'search' }));
          break;
        default:
          dispatch({
            type: FILTER_ORDERS,
            word,
          });
      }
    } catch {
      /* Continue regardless of error */
    } finally {
      dispatch(loaded('order'));
    }
  };
}

/**
 * [setActivityToOrder Deliver or Refund a order in a lot of concepts: Wharehouse Moves, Money, others.]
 *
 * @param   {string}  crmid     [crmid Ordr CRMID
 * @param   {string}  activity  [activityThe actvity that should be done]
 *
 */
export function setActivityToOrder(crmid, activity) {
  const orderApi = new OrderApi();
  const tableApi = new TableAPI();
  return async (dispatch, getState) => {
    dispatch(loading('order'));
    const { table, cart } = getState();
    let response;
    try {
      switch (activity) {
        case 'Entregar':
          response = await tableApi.setMDA(table, cart, activity);
          dispatch(closeModal('deliver'));
          break;
        case 'Devolver Dineros':
          response = await orderApi.refundOrder(crmid, 'money');
          dispatch(closeModal('refund'));
          break;
        case 'Devolver Productos':
          response = await tableApi.setMDA(table, cart, activity);
          dispatch(closeModal('refund'));
          break;
        default:
          return dispatch(loaded('order'));
      }
      if (response) {
        await dispatch(fetchAllOrders());
        await dispatch(clearCart());
        await dispatch(selectOrder(crmid));
        toast.success(` ✔  ${response.message} `);
      } else {
        toast.warn(`❌ ${response.message}`);
      }
    } catch (err) {
      toast.error(' ❌ Error - No se pudo completar el proceso');
    } finally {
      dispatch(loaded('order'));
    }
  };
}
