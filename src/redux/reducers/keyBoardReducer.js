import {
  ADD_KEY_BOARD_ITEM,
  EMPTY_KEY_BOARD_ITEMS,
} from '../actions/keyBoardActions';

const initialState = {};

export default function (state = initialState, action) {
  const { type, item } = action;
  switch (type) {
    case ADD_KEY_BOARD_ITEM:
      return { ...state, ...item };
    case EMPTY_KEY_BOARD_ITEMS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
