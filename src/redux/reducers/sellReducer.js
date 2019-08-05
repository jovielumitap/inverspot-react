import {
  CHANGE_SELL_CASH,
  CHANGE_SELL_CARD,
  CHANGE_SELL_ORDER_STATUS,
  CLEAR_SELL,
} from '../actions/sellActions';

function getInitialState() {
  return {
    cash: 0,
    card: 0,
    sostatus: '',
  };
}

export default function (state = getInitialState(), action) {
  const { type } = action;
  switch (type) {
    case CHANGE_SELL_CASH:
      return { ...state, cash: Number(action.cash) };
    case CHANGE_SELL_CARD:
      return { ...state, card: Number(action.card) };
    case CHANGE_SELL_ORDER_STATUS:
      return { ...state, sostatus: action.sostatus };
    case CLEAR_SELL:
      return { ...getInitialState() };
    default:
      return state;
  }
}
