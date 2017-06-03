import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './modules';

let middleware = [thunkMiddleware];
// if (process.env.NODE_ENV !== 'production') {
//   const loggerMiddleware = require('redux-logger').default; // eslint-disable-line
//   middleware = [...middleware, loggerMiddleware];
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
