/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import { unauthenticate } from './authUserActions';
import ProfileAPI from '../../api/ProfileAPI';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_SCHEMA_SUCCESS,
} from '../actionTypes';

export function fetchProfileDetail() {
  return async (dispatch) => {
    const profileAPI = new ProfileAPI();
    dispatch(loading(''));
    try {
      const response = await profileAPI.getProfile();
      console.log({ fetchProfileDetail: response });
      const { success, message, result } = response.data;
      if (success) {
        console.log('result: ', result);
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: result,
        });
      } else {
        toast.error(message);
      }
    } catch (e) {
      console.log({ fetchOpportunityListError: e });
      if (e.response && e.response.status === 401) {
        toast.error('Necesitar iniciar sesión de nuevo');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    } finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function fetchProfileScheme() {
  return async (dispatch) => {
    const profileAPI = new ProfileAPI();
    dispatch(loading(''));
    try {
      const response = await profileAPI.getProfileScheme();
      console.log({ fetchProfileDetail: response });
      const { success, message, result } = response.data;
      if (success) {
        console.log('result: ', result);
        dispatch({
          type: GET_PROFILE_SCHEMA_SUCCESS,
          payload: result,
        });
      } else {
        toast.error(message);
      }
    } catch (e) {
      console.log({ fetchOpportunityListError: e });
      if (e.response && e.response.status === 401) {
        toast.error('Necesitar iniciar sesión de nuevo');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    } finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function postProfileDetail(params) {
  return async (dispatch) => {
    const profileAPI = new ProfileAPI();
    dispatch(loading(''));
    try {
      await profileAPI.setProfileParams(params).then((res) => {
        console.log('res: ', res);
        const { success, message, result } = res.data;
        if (success) {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: result,
          });
        } else {
          toast.error(message);
        }
      }).catch((err) => {
        console.log('profileApi - setProfileParams err: ', err);
      })
    } catch (err) {
      console.log({ fetchOpportunityListError: err });
      if (err.response && err.response.status === 401) {
        toast.error('Necesitar iniciar sesión de nuevo');
        dispatch(unauthenticate());
        return;
      }
    } finally {
      dispatch(loaded('authUser'));
    }
  };
}
