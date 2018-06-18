import React, { Component } from 'react';

import Header from './Header';
import Notification from './Notification';
import Content from './Content';

import './ContextApp.css';

class ContextApp extends Component {
  state = {
    notification: null,
    color: '#fd798a'
  };
  render() {
    return (
      <div className="container">
        {this.state.notification && (
          <Notification>{this.state.notification}</Notification>
        )}
        <Header color={this.state.color}>Context Demo</Header>
        <Content color={this.state.color} />
      </div>
    );
  }
}

export default ContextApp;
