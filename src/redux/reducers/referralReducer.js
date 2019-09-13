/* eslint-disable camelcase */
import {
  GET_REFERRAL_SUCCESS,
} from "../actionTypes";

const defaultState = () => ({
  referidos: [],
  comisiones: [],
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_REFERRAL_SUCCESS:
      return {
        ...state,
        referidos: action.payload.referidos,
        comisiones: action.payload.comisiones
      };
    default:
      return state;
  }
}
