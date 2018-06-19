import React, { Component } from "react";

import Header from "./Header";
import Notification from "./Notification";
import Content from "./Content";

import "../ContextApp.css";

class ContextApp extends Component {
  state = {
    notification: null
  };
  render() {
    return (
      <div className="container">
        {this.state.notification && (
          <Notification>{this.state.notification}</Notification>
        )}
        <Header>Context Demo</Header>
        <Content />
      </div>
    );
  }
}

export default ContextApp;
