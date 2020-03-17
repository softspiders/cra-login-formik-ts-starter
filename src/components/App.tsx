import React from "react";

import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values extends User {
  firstName: string;
  lastName: string;
  email: string;
}

interface User {
    login: string;
    password: string;
}

const App = () => {
  return (
    <div>
      <h1>Signup</h1>
      <br/>

      <Formik
        initialValues={{
          login: "",
          password:""
        }}
        onSubmit={(
          values: User,
          { setSubmitting }: FormikHelpers<User>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <Field
            name="login"
            render={({ field = "login" /* { name, value, onChange, onBlur } */ }) => (
              <input {...field} type="text" placeholder="Login" />
            )}
          />
          <Field
            name="password"
            render={({ field = "password" /* { name, value, onChange, onBlur } */ }) => (
              <input {...field} type="password" placeholder="Pass" />
            )}
          />

          <button type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
