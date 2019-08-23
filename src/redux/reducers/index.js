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

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: authUserReducer,
  loads: loadReducer,
  displays: displayReducer,
  keyBoard: keyBoardReducer,
  download: downloadReducer,
  opportunity: opportunityReducer,
  participation: participationReducer,
  investment: investmentReducer
});
