import React, { Component } from 'react';

import './FormikForm.css';

const Content = (props) => (
  <div className="contentWrapper">
    <pre>
      <code>
        <p>email: {props.data.email}</p>
        <p>pizzaFruit: {props.data.pizzaFruit}</p>  
        <p>password: {props.data.password}</p>
      </code>
    </pre>
  </div>
)

class FormikForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pizzaFruit: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this); 
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted:', this.state);
  }
  render() {
    return (
    <div className="pageWrapper">
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} />
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <Content
        data={this.state}
      />
    </div>
    );
  }
}

export default FormikForm;