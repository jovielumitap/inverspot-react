import {
  LOADING,
  LOADED,
  TOGGLE_LOAD,
} from '../actions/loadActions';

export default function (state = {}, action) {
  const { type, scope } = action;
  switch (type) {
    case LOADING:
      return { ...state, [`${scope}IsLoading`]: true };
    case LOADED:
      return { ...state, [`${scope}IsLoading`]: false };
    case TOGGLE_LOAD:
      return { ...state, [`${scope}IsLoading`]: !(state[`${scope}IsLoading`]) };
    default:
      return state;
  }
}
