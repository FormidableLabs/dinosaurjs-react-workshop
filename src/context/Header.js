import React from "react";

import "./Header.css";

const Header = props => (
  <div className="header" style={{ backgroundColor: props.color }}>
    {props.children}
  </div>
);

export default Header;
