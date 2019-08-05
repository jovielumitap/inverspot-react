/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import UserAPI from '../../api/UserAPI';
import { loading, loaded } from './loadActions';

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const VERIFY_AUTH_USER = 'VERIFY_AUTH_USER';
export const UNAUTHENTICATE_USER = 'UNAUTHENTICATE_USER';
export const CHANGE_ALM_AUTH_USER = 'CHANGE_ALM_AUTH_USER';
export const CHANGE_SELL_ORDER_STATUS_AUTH_USER = 'CHANGE_SELL_ORDER_STATUS_AUTH_USER';
export const SELECT_STORE_AUTH_USER = 'SELECT_STORE_AUTH_USER';
export const INIT_URL = 'INIT_URL';
export function authenticate(token, domain = 'pruebas.comercia.io', isRemember) {
  return async (dispatch) => {
    const userApi = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userApi.logIn(domain, token);
      const { success, message, user } = response;
      if (success) {
        toast.success(message);
        dispatch({
          type: AUTHENTICATE_USER,
          user: {
            token,
            domain,
            isRemember,
            isAuth: true,
            user,
          },
        });
        const { almacenes } = user;
        if (almacenes.length === 1) {
          dispatch(selectStore(almacenes[0]));
        }
      }

      else {
        toast.error(message);
      }
    }

    catch {
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function verifyAuthUser() {
  return async (dispatch) => {
    const userApi = new UserAPI();
    try {
      const response = await userApi.verify();
      const { success, message, user } = response;
      if (!success) {
        toast.error(message);
      }
      dispatch({
        type: VERIFY_AUTH_USER,
        user: {
          isAuth: success,
          user,
        },
      });
    }
    catch {
      dispatch({
        type: VERIFY_AUTH_USER,
        user: {
          isAuth: false,
        },
      });
      toast.error('Error en la API');
    }
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE_USER,
  };
}

async function _updateConfig(dispatch, config, newValue, type) {
  const newConfig = { ...config, ...newValue };

  const userApi = new UserAPI();
  dispatch(loading('profile'));
  try {
    const response = await userApi.updateConfig(newConfig);
    const { success, message } = response;
    if (!success) {
      toast.error(message);
    }

    else {
      dispatch({
        type,
        ...newValue,
      });
      toast.success(message);
    }
  }
  catch {
    toast.error('Error en la API');
  }

  finally {
    dispatch(loaded('profile'));
  }
}

export function changeAlmAuthUser(pos_auto_alm) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    const { config } = authUser.user;
    const newValue = { pos_auto_alm };
    const type = CHANGE_ALM_AUTH_USER;
    _updateConfig(dispatch, config, newValue, type);
  };
}

export function changeSellOrderStatusAuthUser(sostatus) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    const { config } = authUser.user;
    const newValue = { sostatus };
    const type = CHANGE_SELL_ORDER_STATUS_AUTH_USER;
    _updateConfig(dispatch, config, newValue, type);
  };
}

export function selectStore(crmid, name) {
  return {
    type: SELECT_STORE_AUTH_USER,
    store: {
      crmid,
      name,
    },
  };
}
export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};
export function testLogin(user) {
  return {
    type: AUTHENTICATE_USER,
    user
  };
}
