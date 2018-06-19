import React, { Component } from "react";

import Fetch from "./Fetch";

class RenderPropsApp extends Component {
  render() {
    return <Fetch url="https://jsonplaceholder.typicode.com/users/1" />;
  }
}

export default RenderPropsApp;
