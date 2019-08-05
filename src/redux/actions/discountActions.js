export const ADD_DISCOUNT = 'ADD_DISCOUNT';
export const CHANGE_DISCOUNT = 'CHANGE_DISCOUNT';
export const UPDATE_TOTAL_DISCOUNT = 'UPDATE_TOTAL_DISCOUNT';
export const REMOVE_DISCOUNT = 'REMOVE_DISCOUNT';

export function addDiscount(discount) {
  return {
    type: ADD_DISCOUNT,
    discount,
  };
}

export function changeDiscount(discount) {
  return {
    type: CHANGE_DISCOUNT,
    discount,
  };
}

export function updateTotalDiscount() {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_TOTAL_DISCOUNT,
      total: getState().cart.total,
    });
  };
}

export function removeDiscount() {
  return {
    type: REMOVE_DISCOUNT,
  };
}
