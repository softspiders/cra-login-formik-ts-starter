import React from 'react';
import {Account, User} from "./IInterface"
import {Field, Form, Formik, FormikHelpers} from "formik";
import {getAuthorizationAcceptBase64} from "./Basic64";


export const LoginForm = () =>{
  return(
    <div>

      <Formik
        initialValues={{
          login: "",
          password:""
        }}
        onSubmit={(
          values: Account,
          { setSubmitting }: FormikHelpers<Account>
        ) => {
          setTimeout(() => {
            getAuthorizationAcceptBase64(values.login,values.password);
            // alert(JSON.stringify(values, null, 2));
            // setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={"loginForm"}>
          <h1>Signup</h1>
          <br/>
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

          <button className={"button"}  type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
};
