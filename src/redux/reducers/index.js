import { combineReducers } from 'redux';

import productReducer from './productReducer';
import cartReducer from './cartReducer';
import customerReducer from './customerReducer';
import authUserReducer from './authUserReducer';
import sellReducer from './sellReducer';
import discountReducer from './discountReducer';
import tabReducer from './tabReducer';
import modalReducer from './modalReducer';
import loadReducer from './loadReducer';
import displayReducer from './displayReducer';
import orderReducer from './orderReducer';
import tableReducer from './tableReducer';
import keyBoardReducer from './keyBoardReducer';
import BalanceReducer from './BalanceReducer';
import TimbrarReducer from './TimbrarReducer';
import clientReducer from './clientReducer';
import cotizacionReducer from './cotizacionReducer';
import {connectRouter} from "connected-react-router";

export default (history) => combineReducers({
  router: connectRouter(history),
  product: productReducer,
  order: orderReducer,
  cart: cartReducer,
  customer: customerReducer,
  client: clientReducer,
  auth: authUserReducer,
  sell: sellReducer,
  discount: discountReducer,
  tabs: tabReducer,
  modals: modalReducer,
  loads: loadReducer,
  displays: displayReducer,
  table: tableReducer,
  keyBoard: keyBoardReducer,
  balance: BalanceReducer,
  timbrar: TimbrarReducer,
  cotizacion: cotizacionReducer,
});
