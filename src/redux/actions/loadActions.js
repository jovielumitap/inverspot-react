import {LOADED, LOADING, TOGGLE_LOAD} from "../actionTypes";


export function loading(scope) {
  return {
    type: LOADING,
    scope,
  };
}

export function loaded(scope) {
  return {
    type: LOADED,
    scope,
  };
}

export function toggleLoad(scope) {
  return {
    type: TOGGLE_LOAD,
    scope,
  };
}
