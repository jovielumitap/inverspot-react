/* eslint-disable camelcase */
import {
  AUTHENTICATE_USER,
  VERIFY_AUTH_USER,
  UNAUTHENTICATE_USER,
  CHANGE_ALM_AUTH_USER,
  CHANGE_SELL_ORDER_STATUS_AUTH_USER,
  SELECT_STORE_AUTH_USER, INIT_URL,
} from '../actions/authUserActions';

import { userHelper } from '../../helpers';

const defaultState = () => ({
  isAuth: false,
  isRemember: false,
  token: '',
  domain: '',
  initURL: "",
  authUser: userHelper.getStorage('authUser'),
});

const authenticate = (state, user) => {
  const authUser = { ...state, authUser: user };
  userHelper.setStorage(user);
  return authUser;
};

const verifyAuthUser = (state, user) => {
  if (user.isAuth) {
    return state;
  }
  return defaultState();
};

const unauthenticate = () => {
  userHelper.emptyStorage();
  return defaultState();
};

const changeAlmAuthUser = (authUser, { pos_auto_alm }) => {
  const state = { ...authUser };
  state.user.config.pos_auto_alm = pos_auto_alm;
  return state;
};

const changeSellOrderStatusAuthUser = (authUser, { sostatus }) => {
  const state = { ...authUser };
  state.user.config.sostatus = sostatus;
  return state;
};

const selectStore = (state, { store }) => {
  const authUser = { ...state };
  authUser.user.config.store = store;
  userHelper.setStorage(authUser);
  return authUser;
};

const initialState = { ...defaultState(), ...userHelper.getStorage() };

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case AUTHENTICATE_USER:
      return authenticate(state, action.user);
    case VERIFY_AUTH_USER:
      return verifyAuthUser(state, action.user);
    case UNAUTHENTICATE_USER:
      return unauthenticate();
    case CHANGE_ALM_AUTH_USER:
      return changeAlmAuthUser(state, action);
    case CHANGE_SELL_ORDER_STATUS_AUTH_USER:
      return changeSellOrderStatusAuthUser(state, action);
    case SELECT_STORE_AUTH_USER:
      return selectStore(state, action);
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      }
    }
    default:
      return state;
  }
}
