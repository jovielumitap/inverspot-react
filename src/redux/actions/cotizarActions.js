import { toast } from 'react-toastify';
import CotizarAPI from '../../api/CotizarAPI';
import { addOrderToCart, clearCart } from './cartActions';
import {
  removeCustomer,
  selectCustomer,
} from './customerActions';
import { removeDiscount } from './discountActions';
import { fetchAllProducts } from './productActions';
import { fetchAllOrders } from './orderActions';
import { loading, loaded } from './loadActions';
import { clearSell } from './sellActions';
import { changeTab } from './tabActions';

export const FETCH_ALL_COTIZACIONES = 'FETCH_ALL_COTIZACIONES';
export const ADD_COTIZACION = 'ADD_COTIZACION';
export const GET_COTIZACIONES_BY_PAGE = 'GET_COTIZACIONES_BY_PAGE';
export const FILTER_COTIZACIONES = 'FILTER_COTIZACIONES';
export const SET_MULTIFILTER_COTIZACION = 'SET_MULTIFILTER_COTIZACION';
export const CLEAR_MULTIFILTER_COTIZACION = 'CLEAR_MULTIFILTER_COTIZACION';
export const REMOVE_MULTIFILTER_COTIZACION = 'REMOVE_MULTIFILTER_COTIZACION';
export const SELECT_COTIZACION = 'SELECT_COTIZACION';

const target = 'pos';

const displayGroupMessage = (message) => {
  if (message.success) {
    toast.success(` ✔ ${message.success}`);
  }

  else if (message.warning) {
    toast.warn(` ❕ ${message.warning}`);
  }

  else if (message.error) {
    toast.error(` ❌ ${message.error}`);
  }

  else {
    toast.success(` ❔ ${message.information}`);
  }
};

export function addCotizacion(cotizaciones) {
  return {
    type: ADD_COTIZACION,
    cotizaciones,
  };
}

export function getCotizacionesByPage(page = 0) {
  return async (dispatch) => {
    dispatch(loading(target));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: GET_COTIZACIONES_BY_PAGE,
        page,
      });
    } catch {
      /* Continue regardless of error */
    } finally {
      dispatch(loaded(target));
    }
  };
}

export function setMultiFilterCotizacion(item) {
  return async (dispatch, getState) => {
    const { order } = getState();
    const { filters } = order;
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: SET_MULTIFILTER_COTIZACION,
        filters,
        item,
      });
    } catch (err) {
      console.log('setMultiFilterCotizacion err: ', err);
    }
  };
}

export function filterCotizacion(word) {
  return async (dispatch, getState) => {
    dispatch(loading('order'));
    const { tabs } = getState();
    try {
      await new Promise(resolve => setTimeout(resolve));
      switch (tabs.posDisplayTab) {
        case 'grid':
          dispatch({
            type: FILTER_COTIZACIONES,
            word,
          });
          break;
        case 'list':
          dispatch(setMultiFilterCotizacion({ title: 'search', value: word, type: 'search' }));
          break;
        default:
          dispatch({
            type: FILTER_COTIZACIONES,
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

export function clearAllFiltersCotizacion() {
  return {
    type: CLEAR_MULTIFILTER_COTIZACION,
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
        type: REMOVE_MULTIFILTER_COTIZACION,
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

export function fetchAllCotizaciones() {
  const cotizarApi = new CotizarAPI();
  return async (dispatch) => {
    dispatch(loading(target));
    dispatch({
      type: FETCH_ALL_COTIZACIONES,
    });
    try {
      const response = await cotizarApi.getAll();
      dispatch(addCotizacion(response.result));
    }
    catch (err) {
      dispatch(addCotizacion([]));
    } finally {
      dispatch(clearAllFiltersCotizacion());
      dispatch(loaded(target));
    }
  };
}

export function selectCotizacion(crmid) {
  return async (dispatch, getState) => {
    const { cotizacion, customer } = getState();
    const { customersByArray } = customer;
    const foundOrder = cotizacion.cotizaciones.find(element => element.crmid === crmid);
    const crmidUser = foundOrder.account_id.substring(3);
    const foundCustomer = customersByArray.find(item => item.crmid === crmidUser);
    dispatch({ type: SELECT_COTIZACION });
    await dispatch(addOrderToCart(foundOrder));
    await dispatch(selectCustomer(foundCustomer));
  };
}

export function cotizar() {
  return async (dispatch, getState) => {
    const cotizarApi = new CotizarAPI();
    const {
      cart,
      discount,
      customer,
      authUser,
    } = getState();
    dispatch(loading(target));
    toast.info(' 🚀 Enviando...');
    try {
      const { sostatus } = authUser.user.config;
      const response = await cotizarApi.create(cart, discount, customer, sostatus);
      const { success, message, result } = response;
      if (success) {
        displayGroupMessage(message);
        dispatch(clearCart());
        dispatch(removeCustomer());
        dispatch(removeDiscount());
        dispatch(fetchAllProducts());
        dispatch(fetchAllOrders());
        await dispatch(fetchAllCotizaciones());
        await dispatch(changeTab('posType', 'Cotizaciones'));
        dispatch(clearSell());
        const { crmid } = result;
        dispatch(selectCotizacion(crmid));
      }

      else {
        toast.error(message);
      }
    }

    catch {
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded(target));
    }
  };
}
