/* eslint-disable camelcase */
import {
  RESET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_SCHEMA_SUCCESS,
} from '../actionTypes';

const defaultState = () => ({
  scheme: {},
  profile: {},
  redirect: false,
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_PROFILE_SCHEMA_SUCCESS:
      return {
        ...state,
        scheme: action.payload,
      };
    case RESET_PROFILE:
      return defaultState();
    default:
      return state;
  }
}
