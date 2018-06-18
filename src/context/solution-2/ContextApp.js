import React, { Component } from 'react';

import './ContextApp.css';

import { Provider } from './NotificationContext';
import Header from './Header';
import Notification from './Notification';
import Content from './Content';

class ContextApp extends Component {
  state = {
    notification: null,
  };
  addNotification = n => {
    this.setState({
      notification: n,
    });
  };
  removeNotification = () => {
    this.setState({
      notification: null,
    });
  };
  contextValue = {
    addNotification: this.addNotification,
    removeNotification: this.removeNotification,
  };
  render() {
    return (
      <Provider value={this.contextValue}>
        <div className="container">
          {this.state.notification && (
            <Notification>{this.state.notification}</Notification>
          )}
          <Header>Context Demo</Header>
          <Content />
        </div>
      </Provider>
    );
  }
}

export default ContextApp;
