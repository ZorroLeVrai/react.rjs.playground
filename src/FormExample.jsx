import React from 'react'
import { Form, Field } from 'react-final-form'

const FormExample = () => {
  const onSubmit = (e) => {
    debugger;
  }

  const validate = (e) => {

  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Simple Default Input</h2>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" placeholder="First Name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}

export default FormExample