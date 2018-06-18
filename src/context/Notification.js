import React from 'react';

import './Notification.css';

const Notification = (props) => (
  <div
    className="notification"
  >
    {props.children}
    <span
      style={{ float: 'right', cursor: 'pointer' }}
      onClick={() => { console.log('X clicked'); }}
    >
      X
    </span>
  </div>
);

export default Notification;