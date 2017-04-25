import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';

import store from './store';
// import Hoge from './Hoge';
import Hoge from './containers/Counter';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Hoge);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Hoge', () => {
    render(Hoge);
  });
}
