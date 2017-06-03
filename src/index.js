import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import store from './store';
// import Hoge from './Hoge';
import Counter from './web/containers/Counter';
import Summary from './web/containers/Summary';

// tmp
const Home = () => (
  <div>
    home
  </div>
);

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/summary">Summary</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/summary" component={Summary} />
    </div>
  </Router>
);

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

render(Routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/Coutner', () => {
    render(Counter);
  });
}
