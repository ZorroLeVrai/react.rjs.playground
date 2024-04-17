import React from 'react'
import { Form, Field } from 'react-final-form'
import { persistStore, persistReducer } from 'redux-persist'

persistStore();
persistReducer();

export const FormExample = () => {
  const onSubmit = (e) => { /* fonction appelée lorsque le formulaire est soumis */ }
  //const validate = (e) => { /* fonction qui retourne les erreurs de validation */ }
const validate = e => {
  if (!e.firstName)
  return ({firstName: "Enter a firstName"});
  if (e.firstName.length < 4)
    return ({firstName: "firstName is too short"});
};

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Titre du formulaire</h2>
          <div>
            <label>Prénom</label>
            <Field name="firstName" component="input" placeholder="First Name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
}
