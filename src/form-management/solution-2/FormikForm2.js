import React, { Component } from 'react';
import { Formik, Field } from 'formik';

import './FormikForm.css';

const Content = (props) => (
  <div className="contentWrapper">
    <pre>
      <code>
        {'values = {'}
        <p>  email: {props.data.email}</p>
        <p>  pizzaFruit: {props.data.pizzaFruit}</p>  
        <p>  password: {props.data.password}</p>
        <p>  mealDescription: {props.data.mealDescription}</p>
        {'}\n\n'}
      </code>
    </pre>
  </div>
)

class FormikForm extends Component {
  render() {
    return (
      <Formik 
       initialValues={{
         email: '',
         password: '',
         pizzaFruit: ''
       }}
       onSubmit={values => {
         console.log(values);
       }}
       render={({ values, handleSubmit }) => {
         return (
          <div className="pageWrapper">
            <div className="formWrapper">
              <form onSubmit={handleSubmit}>
                <Field name="email" placeholder="Email" />
                <Field name="password" type="password" placeholder="Password" />
                <Field name="pizzaFruit" component="select">
                  <option value="">Favorite Pizza Topping</option>
                  <option value="watermelon">Watermelon</option>
                  <option value="pear">Pear</option>
                  <option value="mango">Mango</option>
                </Field>
                {/* Example solution for solo exercise */}
                <Field name="mealDescription" placeholder="Describe your last meal" component="textarea" />
                {/* ********************************** */}
                <button type="submit">Submit</button>
              </form>
            </div>
            <Content
              data={values}
            />
          </div>
         )
       }}
      />
    );
  }
}

export default FormikForm;