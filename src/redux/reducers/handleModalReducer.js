import {HIDE_MODAL, SHOW_MODAL, TOGGLE_MODAL} from "../actionTypes";

export default function (state = { open_commo: false }, action) {
  const { type } = action;
  const key = "open_commo";
  switch (type) {
    case SHOW_MODAL:
      return { ...state, [key]: true };
    case HIDE_MODAL:
      return { ...state, [key]: false };
    case TOGGLE_MODAL:
      return { ...state, [key]: !(state[key]) };
    default:
      return state;
  }
}
