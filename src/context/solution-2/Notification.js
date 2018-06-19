import React from "react";

import { Consumer } from "./NotificationContext";

import "../Notification.css";

const Notification = props => (
  <Consumer>
    {({ removeNotification }) => (
      <div className="notification">
        {props.children}
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={removeNotification}
        >
          X
        </span>
      </div>
    )}
  </Consumer>
);

export default Notification;
