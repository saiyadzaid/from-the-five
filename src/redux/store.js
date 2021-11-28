/** @format */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import history from '../common/history';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(history), logger))
  //composeWithDevTools(applyMiddleware(thunk.withExtraArgument(history)))
);
export default store;
