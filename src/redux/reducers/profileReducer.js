/* eslint-disable camelcase */
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_SCHEMA_SUCCESS,
} from '../actionTypes';

const defaultState = () => ({
  profile: {},
  scheme: {},
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_PROFILE_SCHEMA_SUCCESS:
      return {
        ...state,
        scheme: action.payload,
      };
    default:
      return state;
  }
}
