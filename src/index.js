import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Contact from './components/Contact';
import Home from './components/Home';
import Docs from './components/Docs';
import JoinSession from './components/JoinSession';
import MasterDisconnect from './components/MasterDisconnect';
import Navbar from './components/Navbar';

//style
import stylesheet from './css/style.scss'; // eslint-disable-line no-unused-vars

ReactDOM.render(
  <Router basename="/" >
    <Route component={Navbar} />
    <Route
      component={Home}
      exact
      path="/"
    />
    <Route
      component={Home}
      path="/Home"
    />
    <Route
      component={Docs}
      path="/Docs"
    />
    <Route
      component={Contact}
      path="/Contact"
    />
    <Route
      component={JoinSession}
      path="/JoinSession"
    />
    <Route
      component={MasterDisconnect}
      path="/MasterDisconnect"
    />
  </Router>,
  document.getElementById('root')
);
