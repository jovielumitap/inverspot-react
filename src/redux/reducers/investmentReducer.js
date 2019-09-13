/* eslint-disable camelcase */
import {
  GET_INVESTMENT_DETAIL_SUCCESS,
  GET_INVESTMENT_SUCCESS,
} from "../actionTypes";

const defaultState = () => ({
  abiertas: [],
  cerradas: [],
  investmentDetail: {}
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_INVESTMENT_SUCCESS:
      return {
        ...state,
        abiertas: action.payload.abiertas,
        cerradas: action.payload.cerradas
      };
    case GET_INVESTMENT_DETAIL_SUCCESS:
      return {
        ...state,
        investmentDetail: action.payload
      };
    default:
      return state;
  }
}
