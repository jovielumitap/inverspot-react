import { toast } from 'react-toastify';
import CustomerAPI from '../../api/CustomerAPI';
import { loading, loaded } from './loadActions';
import { closeModal } from './modalActions';

export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const SET_DEFAULT_CUSTOMER = 'SET_DEFAULT_CUSTOMER';
export const SELECT_CUSTOMER = 'SELECT_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const FETCH_ALL_CUSTOMERS = 'FETCH_ALL_CUSTOMERS';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const FILTER_CUSTOMERS = 'FILTER_CUSTOMERS';

export function addCustomers(customers) {
  return {
    type: ADD_CUSTOMERS,
    customers,
  };
}

export function setDefaultCustomer(customer) {
  return {
    type: SET_DEFAULT_CUSTOMER,
    customer,
  };
}

export function selectCustomer(customer) {
  return (dispatch) => {
    dispatch({
      type: SELECT_CUSTOMER,
      customer,
    });
    dispatch(closeModal('customerSelect'));
  };
}

export function removeCustomer() {
  return {
    type: REMOVE_CUSTOMER,
  };
}

export function fetchAllCustomers() {
  const customerApi = new CustomerAPI();
  return async (dispatch) => {
    dispatch(loading('selectCustomer'));
    dispatch({
      type: FETCH_ALL_CUSTOMERS,
    });
    try {
      const response = await customerApi.getAll();
      const { success, result } = response;
      if (success) {
        dispatch(addCustomers(result));
      }

      else {
        dispatch(addCustomers([]));
      }
    }

    catch {
      dispatch(addCustomers([]));
    }

    finally {
      dispatch(loaded('selectCustomer'));
    }
  };
}

export function createCustomer(customer) {
  const customerApi = new CustomerAPI();
  return async (dispatch) => {
    dispatch(loading('createCustomer'));
    dispatch({
      type: CREATE_CUSTOMER,
    });

    try {
      const response = await customerApi.create(customer);
      const { success, result, message } = response;
      if (success) {
        toast.success(` ✔ ${message}`);
        dispatch(selectCustomer(result));
        dispatch(closeModal('customerCreate'));
      }

      else {
        toast.error(` ❌ ${message}`);
        dispatch(removeCustomer());
      }
    }

    catch {
      toast.error(' ❌ Error en la API');
      dispatch(removeCustomer());
    }

    finally {
      dispatch(loaded('createCustomer'));
    }
  };
}

export function filterCustomers(word) {
  return async (dispatch) => {
    dispatch(loading('selectCustomer'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: FILTER_CUSTOMERS,
        word,
      });
    }

    catch {
      /* Continue regardless of error */
    }

    finally {
      dispatch(loaded('selectCustomer'));
    }
  };
}
