import {ADD_KEY_BOARD_ITEM, EMPTY_KEY_BOARD_ITEMS} from "../actionTypes";


export function addKeyboardItem(item) {
  return {
    type: ADD_KEY_BOARD_ITEM,
    item,
  };
}

export function emptyKeyBoardItems() {
  return {
    type: EMPTY_KEY_BOARD_ITEMS,
  };
}
