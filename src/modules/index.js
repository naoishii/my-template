import { combineReducers } from 'redux';

import counter from './counter';
import summary from './summary';
import navigator from './navigator';

export default combineReducers({
  counter,
  summary,
  nav: navigator,
});
