import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './components/App';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';
import './styles/main.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="create-room" component={CreateRoom}/>
      <Route path="room" component={Room}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
