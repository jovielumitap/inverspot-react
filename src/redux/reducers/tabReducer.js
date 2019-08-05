import {
  CHANGE_TAB,
} from '../actions/tabActions';

export default function (state = {}, action) {
  const { type, scope, value } = action;
  switch (type) {
    case CHANGE_TAB:
      return { ...state, [`${scope}Tab`]: value };
    default:
      return state;
  }
}
