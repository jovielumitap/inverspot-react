import { createStore, applyMiddleware, compose } from 'redux';
import {createBrowserHistory} from 'history'

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers/index';
import {routerMiddleware} from "connected-react-router";


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
const store = createStore(reducers(history), composeEnhancers(
  applyMiddleware(thunk, loggerMiddleware, routeMiddleware)
));
// const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

export default store;
export {history};
