/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import UserAPI from '../../api/UserAPI';
import { loading, loaded } from './loadActions';
import {
  AUTHENTICATE_USER,
  INIT_URL,
  UNAUTHENTICATE_USER
} from "../actionTypes";


export function authenticate(token, isRemember) {
  return async (dispatch) => {
    const userApi = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userApi.logIn(token);
      console.log({ response });
      const { success, message, access_token, token_type } = response.data;
      if (success) {
        dispatch({
          type: AUTHENTICATE_USER,
          user: {
            token: access_token,
            token_type,
            isRemember,
            isAuth: true,
          },
        });
      }
      else {
        toast.error(message);
      }
    }

    catch(e) {
      console.log({LoginError: e})
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE_USER,
  };
}

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};
