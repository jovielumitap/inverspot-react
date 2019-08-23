/* eslint-disable camelcase */
import {
  GET_PARTICIPATION_DETAIL_SUCCESS,
  GET_PARTICIPATION_SUCCESS
} from "../actionTypes";

const defaultState = () => ({
  participations: [],
  participationDetail: {}
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_PARTICIPATION_SUCCESS:
      return {
        ...state,
        participations: action.payload
      };
    case GET_PARTICIPATION_DETAIL_SUCCESS:
      return {
        ...state,
        participationDetail: action.payload
      };
    default:
      return state;
  }
}
