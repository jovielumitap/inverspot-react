import { combineReducers } from 'redux';
import {connectRouter} from "connected-react-router";

import authUserReducer from './authUserReducer';
import loadReducer from './loadReducer';
import displayReducer from './displayReducer';
import keyBoardReducer from './keyBoardReducer';
import downloadReducer from './downloadReducer';
import opportunityReducer from './opportunityReducer';
import participationReducer from './participationReducer';
import investmentReducer from './investmentReducer';
import referralReducer from "./referralReducer";
import handleModalReducer from "./handleModalReducer";
import profileReducer from "./profileReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authUserReducer,
  loads: loadReducer,
  displays: displayReducer,
  handleModal: handleModalReducer,
  keyBoard: keyBoardReducer,
  download: downloadReducer,
  opportunity: opportunityReducer,
  participation: participationReducer,
  investment: investmentReducer,
  referral: referralReducer,
  profileReducer: profileReducer
});
