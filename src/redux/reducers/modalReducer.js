import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_MODAL,
} from '../actions/modalActions';

export default function (state = {}, action) {
  const { type, scope } = action;
  switch (type) {
    case OPEN_MODAL:
      return { ...state, [`${scope}ModalIsOpen`]: true };
    case CLOSE_MODAL:
      return { ...state, [`${scope}ModalIsOpen`]: false };
    case TOGGLE_MODAL:
      return { ...state, [`${scope}ModalIsOpen`]: !(state[`${scope}ModalIsOpen`]) };
    default:
      return state;
  }
}
