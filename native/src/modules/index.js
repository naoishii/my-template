import { combineReducers } from 'redux';

import counter from './counter';
import summary from './summary';

export default combineReducers({
  counter,
  summary,
});
