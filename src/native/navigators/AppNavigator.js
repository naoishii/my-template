import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import Counter from '../containers/Counter';
import Summary from '../containers/Summary';

export const AppNavigator = TabNavigator({
  Counter: { screen: Counter },
  Summary: { screen: Summary },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default AppWithNavigationState;