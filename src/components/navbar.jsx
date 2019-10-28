import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                aria-controls="navbar"
                aria-expanded="false"
                className="navbar-toggle collapsed"
                data-target="#navbar"
                data-toggle="collapse"
                type="button"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link
                className="navbar-brand"
                to="/Home"
              >
                deThread
              </Link>
            </div>
            <div
              className="navbar-collapse collapse"
              id="navbar"
            >
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Docs">Docs</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/JoinSession">Hash Decryption Demo</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
