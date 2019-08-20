/* eslint-disable camelcase */
import { userHelper } from '../../helpers';
import {AUTHENTICATE_USER, INIT_URL, UNAUTHENTICATE_USER} from "../actionTypes";

const defaultState = () => ({
  initURL: "",
  authUser: userHelper.getStorage('authUser'),
});

const authenticate = (state, user) => {
  const authUser = { ...state, authUser: user };
  userHelper.setStorage(user);
  return authUser;
};


const unauthenticate = () => {
  userHelper.emptyStorage();
  return defaultState();
};

const initialState = { ...defaultState()};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case AUTHENTICATE_USER:
      return authenticate(state, action.user);
    case UNAUTHENTICATE_USER:
      return unauthenticate();
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
