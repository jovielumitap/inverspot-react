/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {unauthenticate} from "./authUserActions";
import ProfileAPI from "../../api/ProfileAPI";
import {GET_PROFILE_SUCCESS} from "../actionTypes";

export function fetchProfileDetail() {
  return async (dispatch) => {
    const profileAPI = new ProfileAPI();
    dispatch(loading(''));
    try {
      const response = await profileAPI.getProfile();
      console.log({ fetchProfileDetail: response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message);
      }
    }

    catch(e) {
      console.log({fetchOpportunityListError: e});
      if (e.response && e.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

