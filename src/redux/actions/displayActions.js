import {HIDE_ELEMENT, SHOW_ELEMENT, TOGGLE_ELEMENT} from "../actionTypes";


export function showElement(scope) {
  return {
    type: SHOW_ELEMENT,
    scope,
  };
}

export function hideElement(scope) {
  return {
    type: HIDE_ELEMENT,
    scope,
  };
}

export function toggleElement(scope) {
  return {
    type: TOGGLE_ELEMENT,
    scope,
  };
}
