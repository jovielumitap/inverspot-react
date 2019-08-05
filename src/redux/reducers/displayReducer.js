import {
  SHOW_ELEMENT,
  HIDE_ELEMENT,
  TOGGLE_ELEMENT,
} from '../actions/displayActions';

export default function (state = {}, action) {
  const { type, scope } = action;
  const key = `${scope}IsDisplayed`;
  switch (type) {
    case SHOW_ELEMENT:
      return { ...state, [key]: true };
    case HIDE_ELEMENT:
      return { ...state, [key]: false };
    case TOGGLE_ELEMENT:
      return { ...state, [key]: !(state[key]) };
    default:
      return state;
  }
}
