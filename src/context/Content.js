import React from "react";

import Button from "./Button";
import "./Content.css";

const Content = props => (
  <div className="content">
    <h4>Context is pretty cool.</h4>
    <p>Click the notify button to show a notification!</p>
    <Button color={props.color}>Notify!</Button>
  </div>
);

export default Content;
