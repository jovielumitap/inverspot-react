/* eslint-disable camelcase */
import { userHelper } from '../../helpers';
import {
  AUTHENTICATE_USER,
  GET_ASESORES_SUCCESS, GET_PRIVACY_POLICY_SUCCESS, GET_TERMS_CONDITION_SUCCESS,
  INIT_URL,
  REGISTER_EMAIL_PASS_SUCCESS,
  UNAUTHENTICATE_USER,
  GET_CONTRACT_CONTENT_SUCCESS
} from "../actionTypes";

const defaultState = () => ({
  initURL: "",
  user: userHelper.getStorage('user'), // profile_status: must_fill_profile, verifying, must_sign_contract, approved
  asesores: [],
  terms: '',
  privacy: '',
  contract_content: ''
});

const authenticate = (state, user) => {
  const authUser = { ...state, user: user };
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
    case GET_ASESORES_SUCCESS:
      return {
        ...state,
        asesores: action.payload
      };
    case GET_TERMS_CONDITION_SUCCESS:
      return {
        ...state,
        terms: action.payload
      };
    case GET_PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        privacy: action.payload
      };
    case GET_CONTRACT_CONTENT_SUCCESS:
      return {
        ...state,
        contract_content: action.payload
      };
    case REGISTER_EMAIL_PASS_SUCCESS:
      return authenticate(state, action.user);
    default:
      return state;
  }
}
