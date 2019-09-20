import {HIDE_MODAL, SHOW_MODAL, TOGGLE_MODAL} from "../actionTypes";

export function showCommoModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideCommoModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function toggleCommoModal() {
  return {
    type: TOGGLE_MODAL,
  };
}
