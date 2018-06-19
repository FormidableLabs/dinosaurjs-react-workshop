import React, { Component } from "react";

import "./FormikForm.css";

const Values = props => (
  <div className="contentWrapper">
    <pre>
      <code>
        {"values = {"}
        <p> email: {props.data.email}</p>
        <p> pizzaFruit: {props.data.pizzaFruit}</p>
        <p> password: {props.data.password}</p>
        {"}\n\n"}
      </code>
    </pre>
  </div>
);

class FormikForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pizzaFruit: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="pageWrapper">
        <div className="formWrapper">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <select
            name="pizzaFruit"
            value={this.state.fruit}
            onChange={this.handleChange}
          >
            <option value="">Favorite Pizza topping</option>
            <option value="watermelon">Watermelon</option>
            <option value="pear">Pear</option>
            <option value="mango">Mango</option>
          </select>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        <Values data={this.state} />
      </div>
    );
  }
}

export default FormikForm;
