/* eslint-disable no-underscore-dangle */
import {
  ADD_DISCOUNT,
  CHANGE_DISCOUNT,
  UPDATE_TOTAL_DISCOUNT,
  REMOVE_DISCOUNT,
} from '../actions/discountActions';

function _getDefaultState() {
  return {
    fixed: 0,
    percentage: 0,
    total: 0,
    name: '',
    haveDiscount: false,
  };
}

function _setStorage(discount)
{
  sessionStorage.setItem('discount', JSON.stringify(discount));
}

function _getStorage()
{
  const discountStorage = sessionStorage.getItem('discount');
  try {
    const discount = JSON.parse(discountStorage) || _getDefaultState();
    return discount;
  }

  catch {
    return _getDefaultState();
  }
}

function addDiscount(state, { discount }) {
  const newState = { ...state, ...discount, haveDiscount: true };
  _setStorage(newState);
  return newState;
}

function changeDiscount(state, { discount }) {
  const newState = { ...state, ...discount };
  _setStorage(newState);
  return newState;
}

function updateTotalDiscount(state, { total }) {
  const { fixed, percentage } = state;
  const totalDiscount = (fixed + ((percentage / 100) * total)) || 0;
  const newState = { ...state, total: totalDiscount };
  _setStorage(newState);
  return newState;
}

function removeDiscount() {
  _setStorage(_getDefaultState());
  return _getDefaultState();
}

const initialState = _getStorage();

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ADD_DISCOUNT:
      return addDiscount(state, action);
    case CHANGE_DISCOUNT:
      return changeDiscount(state, action);
    case UPDATE_TOTAL_DISCOUNT:
      return updateTotalDiscount(state, action);
    case REMOVE_DISCOUNT:
      return removeDiscount();
    default:
      return state;
  }
}
