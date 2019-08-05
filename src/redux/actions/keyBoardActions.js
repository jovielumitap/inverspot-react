export const ADD_KEY_BOARD_ITEM = 'ADD_KEY_BOARD_ITEM';
export const EMPTY_KEY_BOARD_ITEMS = 'EMPTY_KEY_BOARD_ITEMS';

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
