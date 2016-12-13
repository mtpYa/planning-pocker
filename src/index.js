import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store/store';

import App from './components/App';
import Room from './components/pages/Room';
import CreateRoom from './components/pages/CreateRoom';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={CreateRoom} />
        <Route path="create-room" component={CreateRoom} />
        <Route path="room" component={Room} />
        <Route path="*" component={CreateRoom} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
