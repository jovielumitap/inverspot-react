export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function openModal(scope) {
  return {
    type: OPEN_MODAL,
    scope,
  };
}

export function closeModal(scope) {
  return {
    type: CLOSE_MODAL,
    scope,
  };
}

export function toggleModal(scope) {
  return {
    type: TOGGLE_MODAL,
    scope,
  };
}
