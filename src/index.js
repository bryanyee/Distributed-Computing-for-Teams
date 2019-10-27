import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Contact from './components/Contact';
import Performance from './components/Performance';
import Home from './components/Home';
import Docs from './components/Docs';
import JoinSession from './components/JoinSession';
import MasterDisconnect from './components/MasterDisconnect';
import Navbar from './components/Navbar';

//style
import stylesheet from './css/style.scss';

ReactDOM.render(
  <Router basename="/" >
    <Route component={Navbar} />
    <Route path="/" exact component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/Docs" component={Docs} />
    <Route path="/Contact" component={Contact} />
    <Route path="/JoinSession" component={JoinSession} />
    <Route path="/MasterDisconnect" component={MasterDisconnect} />
  </Router>,
  document.getElementById('root')
);
