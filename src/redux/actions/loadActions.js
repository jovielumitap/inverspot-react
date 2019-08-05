export const LOADING = 'LOADING';
export const LOADED = 'LOADED';
export const TOGGLE_LOAD = 'TOGGLE_LOAD';

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
