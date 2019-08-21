/* eslint-disable camelcase */
import {
  GET_OPPORTUNITY_DETAIL_SUCCESS,
  GET_OPPORTUNITY_SUCCESS
} from "../actionTypes";

const defaultState = () => ({
  opportunities: [],
  opportunityDetail: {}
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_OPPORTUNITY_SUCCESS:
      return {
        ...state,
        opportunities: action.payload
      };
    case GET_OPPORTUNITY_DETAIL_SUCCESS:
      return {
        ...state,
        opportunityDetail: action.payload
      };
    default:
      return state;
  }
}
