import React, { Component } from "react";

class Fetch extends Component {
  state = {
    loading: true,
    errors: null,
    data: null
  };
  componentDidMount() {
    console.log("fetching");
  }
  render() {
    return <p>Fetch Component</p>;
  }
}

export default Fetch;
