import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import RenderPropsApp from "./render-props/RenderPropsApp";
import ContextApp from "./context/ContextApp";
import FormikForm from "./form-management/FormikForm";

import "./App.css";

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
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/render-props"
            >
              Render Props
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/context"
            >
              Context
            </NavLink>
            <NavLink
              className="route-btn"
              activeClassName="route-btn-active"
              to="/form-management"
            >
              Form Management
            </NavLink>
          </div>
          <div className="contents">
            <Route
              exact
              path="/"
              render={() => (
                <Fragment>
                  <p>Welcome to Intermediate React!</p>
                  <p>The slides are right here</p>
                  <p>
                    <pre>open src/render-props/lecture.html</pre>
                  </p>
                  <p>
                    <pre>open src/context/lecture.html</pre>
                  </p>
                  <p>
                    <pre>open src/form-management/lecture.html</pre>
                  </p>
                </Fragment>
              )}
            />
            <Route path="/render-props" component={RenderPropsApp} />
            <Route path="/context" component={ContextApp} />
            <Route path="/form-management" component={FormikForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
