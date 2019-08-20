import {LOADED, LOADING, TOGGLE_LOAD} from "../actionTypes";

export default function (state = { loading: false}, action) {
  const { type, scope } = action;
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case LOADED:
      return { ...state, loading: false };
    case TOGGLE_LOAD:
      return { ...state, [`${scope}IsLoading`]: !(state[`${scope}IsLoading`]) };
    default:
      return state;
  }
}
