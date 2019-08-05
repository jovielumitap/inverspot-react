import {
  SET_BALANCE,
  GET_CC,
  GET_ACC,
} from '../actions/BalanceActions';

import { balanceHelper } from '../../helpers';

const defaultState = () => ({
  datos: [],
  cc: [],
  acc: [],
});

const addBalance = (state, { datos }) => {
  const info = balanceHelper.transformBalance(datos);
  return { ...state, datos: info };
};

const getCC = (state, { datos }) => ({
  ...state,
  cc: [...datos],
});

const getACC = (state, { datos }) => ({
  ...state,
  acc: [...datos],
});

export default (state = defaultState(), action) => {
  const { type } = action;
  switch (type) {
    case SET_BALANCE:
      return addBalance(state, action.data);
    case GET_CC:
      return getCC(state, action.info);
    case GET_ACC:
      return getACC(state, action.info);
    default:
      return state;
  }
};
