import React from "react";

import { Consumer as ThemeConsumer } from "./ThemeContext";
import { Consumer as NotificationConsumer } from "./NotificationContext";
import "../Button.css";

export default class Button extends React.Component {
  render() {
    return (
      <NotificationConsumer>
        {({ addNotification }) => (
          <ThemeConsumer>
            {({ color }) => (
              <button
                className="button"
                onClick={() => {
                  addNotification("IM A NOTIFICATION!");
                }}
                style={{ backgroundColor: color }}
              >
                {this.props.children}
              </button>
            )}
          </ThemeConsumer>
        )}
      </NotificationConsumer>
    );
  }
}
