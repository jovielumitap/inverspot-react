export const SHOW_ELEMENT = 'SHOW_ELEMENT';
export const HIDE_ELEMENT = 'HIDE_ELEMENT';
export const TOGGLE_ELEMENT = 'TOGGLE_ELEMENT';

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
