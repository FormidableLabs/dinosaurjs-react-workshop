import React, { Component } from "react";

import Fetch from "./Fetch";

class RenderPropsApp extends Component {
  render() {
    return (
      <Fetch url="https://jsonplaceholder.typicode.com/users/1">
        {({ loading, error, data }) => {
          if (error !== null) {
            console.log(error);
            return <p>Error: {error.message}</p>;
          }
          return loading ? (
            <p>Loading</p>
          ) : (
            <pre>
              <code>
                {"{"}
                <p> id: {data.id}</p>
                <p> name: {data.name}</p>
                <p> username: {data.username}</p>
                <p> email: {data.email}</p>
                <p>
                  {" "}
                  address: {data.address.street} {data.address.suite},{" "}
                  {data.address.city}
                </p>
                {"}\n\n"}
              </code>
            </pre>
          );
        }}
      </Fetch>
    );
  }
}

export default RenderPropsApp;
