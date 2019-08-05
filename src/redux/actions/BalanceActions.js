import { toast } from 'react-toastify';

import BalanceAPI from '../../api/BalanceAPI';
import { loading, loaded } from './loadActions';
import { closeModal } from './modalActions';

export const SET_BALANCE = 'SET_BALANCE';
export const GET_CC = 'GET_CC';
export const GET_ACC = 'GET_ACC';
export const SAVE_CC = 'SAVE_CC';
export const SAVE_ACC = 'SAVE_ACC';

export function fetchBalance() {
  return async (dispatch) => {
    dispatch(loading('balance'));
    try {
      const balance = new BalanceAPI();
      const data = await balance.getBalance();
      dispatch({
        type: SET_BALANCE,
        data,
      });
    } catch (err) {
      console.log('fetchBalance err: ', err);
    } finally {
      dispatch(loaded('balance'));
    }
  };
}


/**
 *
 * @param {boolean} flag ['' to getCC and true in case to setCC]
 */
export function CC(flag = '') {
  return async (dispatch) => {
    dispatch(loading('dialogCC'));
    try {
      const balance = new BalanceAPI();
      const info = await balance.getCC(flag);
      dispatch({
        type: GET_CC,
        info,
      });
    }

    catch (err) {
      console.log('getCC err: ', err);
    }

    finally {
      dispatch(loaded('dialogCC'));
    }
  };
}

export function ACC() {
  return async (dispatch) => {
    dispatch(loading('dialogACC'));
    try {
      const balance = new BalanceAPI();
      const info = await balance.getACC();
      dispatch({
        type: GET_ACC,
        info,
      });
    } catch (err) {
      console.log('getACC err: ', err);
    } finally {
      dispatch(loaded('dialogACC'));
    }
  };
}

export function saveCC(data) {
  return async (dispatch) => {
    const { selectedCheckboxes, unselectedCheckboxes } = data;
    dispatch({ type: SAVE_CC });
    dispatch(loading('dialogCC'));
    try {
      const balance = new BalanceAPI();
      const response = await balance.saveCC(selectedCheckboxes, unselectedCheckboxes);
      const { datos } = response;
      const { pendientes, solicitados } = datos;
      if (pendientes !== undefined && solicitados !== undefined) {
        toast.success('Corte De Caja Exitoso');
      }
      else {
        toast.error('Error En El Corte De Caja');
      }
    }

    catch (err) {
      console.log('saveCC err: ', err);
    }

    finally {
      dispatch(loaded('dialogCC'));
      dispatch(closeModal('dialogCC'));
    }
  };
}

export function saveACC(data) {
  return async (dispatch) => {
    const { selectedCheckboxes } = data;
    dispatch({ type: SAVE_ACC });
    dispatch(loading('dialogACC'));
    try {
      const balance = new BalanceAPI();
      const response = await balance.saveCC(selectedCheckboxes);
      const { datos } = response;
      const { pendientes, solicitados } = datos;
      if (pendientes !== undefined && solicitados !== undefined) {
        toast.success('Corte De Caja Recibido');
      }
      else {
        toast.error('Error En El Corte De Caja');
      }
    }

    catch (err) {
      console.log('saveACC err: ', err);
    }

    finally {
      dispatch(loaded('dialogACC'));
      dispatch(closeModal('dialogACC'));
    }
  };
}
