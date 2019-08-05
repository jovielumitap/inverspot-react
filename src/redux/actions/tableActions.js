import { toast } from 'react-toastify';
import TableAPI from '../../api/TableAPI';
import { loading, loaded } from './loadActions';
import { closeModal } from './modalActions';

export const ADD_ITEMS_TO_TABLE = 'ADD_ITEMS_TO_TABLE';
export const SELECT_EMPTY_TO_TABLE = 'SELECT_EMPTY_TO_TABLE';
export const SELECT_TO_DELIVERED = 'SELECT_TO_DELIVERED';
export const SELECT_TO_REFUNDED = 'SELECT_TO_REFUNDED';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CLEAR_TABLE = 'CLEAR_TABLE';
export const CHANGE_COMMENT = 'CHANGE_COMMENT';

export function clearTable() {
  return {
    type: CLEAR_TABLE,
  };
}

export function addItemsToTable(typeAction) {
  const tableApi = new TableAPI();
  return async (dispatch, getState) => {
    try {
      dispatch(loading('table'));
      const { cart, authUser: { user: { config: { store } } } } = getState();
      const { orderSelected } = cart;
      dispatch(clearTable());
      const response = await tableApi.getOrderDetails(orderSelected.crmid, store.crmid, typeAction);
      if (response.success) {
        dispatch({
          type: ADD_ITEMS_TO_TABLE,
          cart,
          typeAction,
          response,
          store,
        });
      } else {
        dispatch(closeModal('deliver'));
        dispatch(closeModal('refund'));
        toast.warn(` ❌ ${response.message}`);
      }
    } catch (err) {
      console.log('err addItemsTable: ', err);
    } finally {
      dispatch(loaded('table'));
    }
  };
}

export function selectEmptyToTable() {
  return (dispatch, getState) => {
    const { table } = getState();
    dispatch({
      type: SELECT_EMPTY_TO_TABLE,
      table,
    });
  };
}

export function selectToDelivered() {
  return (dispatch, getState) => {
    const { table } = getState();
    dispatch({
      type: SELECT_TO_DELIVERED,
      table,
    });
  };
}

export function changeFieldValue(obj) {
  return (dispatch, getState) => {
    const { table } = getState();
    dispatch({
      type: CHANGE_FIELD,
      obj,
      table,
    });
  };
}

export function selectToRefunded() {
  return (dispatch, getState) => {
    const { table } = getState();
    dispatch({
      type: SELECT_TO_REFUNDED,
      table,
    });
  };
}

export function chnageComment(word) {
  return async (dispatch) => {
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: CHANGE_COMMENT,
        word,
      });
    } catch {
      /* Continue regardless of error */
    }
  };
}
