import React from "react";

import "./Button.css";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className="button"
        onClick={() => {
          console.log("button clicked");
        }}
        style={{ backgroundColor: this.props.color }}
      >
        {this.props.children}
      </button>
    );
  }
}
