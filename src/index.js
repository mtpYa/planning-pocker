import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Room from './components/pages/Room';
import CreateRoom from './components/pages/CreateRoom';
import './styles/main.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CreateRoom} />
      <Route path="create-room" component={CreateRoom} />
      <Route path="room" component={Room} />
      <Route path="*" component={CreateRoom} />
    </Route>
  </Router>,
  document.getElementById('root')
);
