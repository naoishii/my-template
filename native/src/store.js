import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './modules';
import asyncStorage from './middleware/asyncStorage';

let middleware = [thunkMiddleware, asyncStorage];
if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = require('redux-logger').default; // eslint-disable-line
  middleware = [...middleware, loggerMiddleware];
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware),
);

export default store;
