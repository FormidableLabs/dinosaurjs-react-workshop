import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import RenderPropsApp from './render-props/RenderPropsApp';
import ContextApp from './context/ContextApp';
import FormikApp from './form-management/FormikApp';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="nav-header">
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              exact
              to="/">
              Home
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/render-props">
              Render Props
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/context">
              Context
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/form-management">
              Form Management
            </NavLink>
          </div>
          <Route exact path="/" render={() => <h3>Please select a topic</h3>} />
          <Route path="/render-props" component={RenderPropsApp} />
          <Route path="/context" component={ContextApp} />
          <Route path="/form-management" component={FormikApp} />
        </div>
      </Router>
    );
  }
}

export default App;
