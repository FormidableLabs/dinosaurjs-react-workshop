import React, { Component } from "react";
import { Formik, Field } from "formik";

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
        {"errors = {"}
        <p> email: {props.errors.email}</p>
        <p> pizzaFruit: {props.errors.pizzaFruit}</p>
        <p> password: {props.errors.password}</p>
        <p> mealDescription: {props.errors.mealDescription}</p>
        {"}"}
      </code>
    </pre>
  </div>
);

const validateRequired = value => {
  if (!value) {
    return "This field is required.";
  }
};

const validateSelect = value => {
  if (!value) {
    return "Please select a fruit.";
  } else if (value === "mango") {
    return "Ew, you want mango on a pizza?";
  }
};

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
        render={({ values, errors, touched, handleSubmit }) => {
          return (
            <div className="pageWrapper">
              <div className="formWrapper">
                <Field
                  name="email"
                  placeholder="Email"
                  validate={validateRequired}
                />
                {touched.email &&
                  errors.email && <div className="error">{errors.email}</div>}
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  validate={validateRequired}
                />
                {touched.password &&
                  errors.password && (
                    <div className="error">{errors.password}</div>
                  )}
                <Field
                  name="pizzaFruit"
                  component="select"
                  validate={validateSelect}
                >
                  <option value="">Favorite Pizza Topping</option>
                  <option value="watermelon">Watermelon</option>
                  <option value="pear">Pear</option>
                  <option value="mango">Mango</option>
                </Field>
                {touched.pizzaFruit &&
                  errors.pizzaFruit && (
                    <div className="error">{errors.pizzaFruit}</div>
                  )}
                {/* Example solution for solo exercise */}
                <Field
                  name="mealDescription"
                  placeholder="Describe your last meal"
                  component="textarea"
                />
                {/* ********************************** */}
                <button type="submit" onSubmit={handleSubmit}>
                  Submit
                </button>
              </div>
              <Content data={values} errors={errors} />
            </div>
          );
        }}
      />
    );
  }
}

export default FormikForm;
