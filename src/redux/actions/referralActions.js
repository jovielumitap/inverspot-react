/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_REFERRAL_SUCCESS,
} from "../actionTypes";
import {unauthenticate} from "./authUserActions";
import ReferralAPI from "../../api/ReferralsAPI";

export function fetchReferralList() {
  return async (dispatch) => {
    const referralAPI = new ReferralAPI();
    dispatch(loading(''));
    try {
      const response = await referralAPI.getReferrals();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_REFERRAL_SUCCESS,
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
