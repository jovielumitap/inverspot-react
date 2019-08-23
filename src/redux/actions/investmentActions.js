/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_INVESTMENT_DETAIL_SUCCESS,
  GET_INVESTMENT_SUCCESS,
} from "../actionTypes";
import {unauthenticate} from "./authUserActions";
import InvestmentAPI from "../../api/InvestmentAPI";

export function fetchInvestmentList() {
  return async (dispatch) => {
    const investmentAPI = new InvestmentAPI();
    dispatch(loading(''));
    try {
      const response = await investmentAPI.getInvestments();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_INVESTMENT_SUCCESS,
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

export function fetchInvestmentDetail(id) {
  return async (dispatch) => {
    const investmentAPI = new InvestmentAPI();
    dispatch(loading(''));
    try {
      const response = await investmentAPI.investmentDetail(id);
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_INVESTMENT_DETAIL_SUCCESS,
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
