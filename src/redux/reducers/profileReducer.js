/* eslint-disable camelcase */
import {
  GET_PROFILE_SUCCESS,
} from "../actionTypes";

const defaultState = () => ({
  profile: {}
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
