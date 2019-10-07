/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_PARTICIPATION_DETAIL_SUCCESS,
  GET_PARTICIPATION_SUCCESS,
} from "../actionTypes";
import { unauthenticate } from "./authUserActions";
import ParticipationAPI from "../../api/ParticipationAPI";

export function fetchParticipationList() {
  return async (dispatch) => {
    const participationAPI = new ParticipationAPI();
    dispatch(loading(''));
    try {
      const response = await participationAPI.getParticipations();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_PARTICIPATION_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message.error);
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

export function fetchParticipationDetail(id) {
  return async (dispatch) => {
    const participationAPI = new ParticipationAPI();
    dispatch(loading(''));
    try {
      const response = await participationAPI.participationDetail(id);
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_PARTICIPATION_DETAIL_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message.error);
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
export function submitConfirmInvestment(invoiceid, password, history) {
  return async (dispatch) => {
    const participationAPI = new ParticipationAPI();
    dispatch(loading(''));
    try {
      const response = await participationAPI.confirmInvestment({ invoiceid, password});
      console.log({ submitConfirmInvestment: response });
      const { success, message } = response.data;
      if (success) {
        toast.success(message.success);
        history.push("/app/investment")
      } else {
        toast.error(message.error);
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
