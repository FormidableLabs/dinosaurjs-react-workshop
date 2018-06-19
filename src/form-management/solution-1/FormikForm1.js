import React, { Component } from "react";
import { Formik } from "formik";

import "../FormikForm.css";

const Content = props => (
  <div className="contentWrapper">
    <pre>
      <code>
        {"values = {"}
        <p> email: {props.data.email}</p>
        <p> pizzaFruit: {props.data.pizzaFruit}</p>
        <p> password: {props.data.password}</p>
        <p> mealDescription: {props.data.mealDescription}</p>
        {"}\n\n"}
      </code>
    </pre>
  </div>
);

class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
          pizzaFruit: "",
          mealDescription: ""
        }}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ values, handleChange, handleSubmit }) => {
          return (
            <div className="pageWrapper">
              <div className="formWrapper">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                />
                <select
                  name="pizzaFruit"
                  value={values.fruit}
                  onChange={handleChange}
                >
                  <option value="">Favorite Pizza Topping</option>
                  <option value="watermelon">Watermelon</option>
                  <option value="pear">Pear</option>
                  <option value="mango">Mango</option>
                </select>
                {/* Example solution for solo exercise */}
                <textarea
                  name="mealDescription"
                  placeholder="Describe your last meal"
                  value={values.mealDescription}
                  onChange={handleChange}
                />
                {/* ********************************** */}
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <Content data={values} />
            </div>
          );
        }}
      />
    );
  }
}

export default FormikForm;
