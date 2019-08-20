/* eslint-disable camelcase */
import {
  GET_DOWNLOAD_SUCCESS
} from "../actionTypes";

const defaultState = () => ({
  downloads: []
});

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case GET_DOWNLOAD_SUCCESS:
      return {
        ...state,
        downloads: action.payload
      };
    default:
      return state;
  }
}
