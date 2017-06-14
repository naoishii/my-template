import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../native/navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Counter');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
);

const NAVIGATION_BACK = 'Navigation/Back';
const NAVIGATION_COUNTER = 'Navigation/Counter';
const NAVIGATION_SUMMARY = 'Navigation/Summary';

export default function reducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case NAVIGATION_BACK:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    case NAVIGATION_COUNTER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Counter' }),
        state,
      );
      break;
    case NAVIGATION_SUMMARY:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Summary' }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
