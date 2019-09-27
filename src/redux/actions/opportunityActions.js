/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_OPPORTUNITY_DETAIL_SUCCESS,
  GET_OPPORTUNITY_SUCCESS,
} from "../actionTypes";
import OpportunityAPI from "../../api/OpportunityAPI";
import {unauthenticate} from "./authUserActions";

export function fetchOpportunityList() {
  return async (dispatch) => {
    const opportunityAPI = new OpportunityAPI();
    dispatch(loading(''));
    try {
      const response = await opportunityAPI.getOpportunities();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_OPPORTUNITY_SUCCESS,
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

export function fetchOpportunityDetail(id) {
  return async (dispatch) => {
    const opportunityAPI = new OpportunityAPI();
    dispatch(loading(''));
    try {
      const response = await opportunityAPI.opportunityDetail(id);
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_OPPORTUNITY_DETAIL_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message);
      }
    }

    catch(e) {
      console.log({fetchOpportunityDetail: e});
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
export function submitApartarRequest(productid, quantity, history) {
  return async (dispatch) => {
    const opportunityAPI = new OpportunityAPI();
    dispatch(loading(''));
    try {
      const response = await opportunityAPI.requestApartar({ productid, quantity});
      console.log({ submitApartarRequest: response });
      const { success, message } = response.data;
      if (success) {
        toast.success(message.success);
        history.push("/app/apartadas")
      } else {
        toast.error(message);
      }
    }

    catch(e) {
      console.log({fetchOpportunityDetail: e});
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
