import React from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";


export interface Account {
  login: string;
  password: string;
}

export const SignIn = () =>{
    return(
    <div>
      <Formik
        initialValues={{
          login: "",
          password:""
        }}

        onSubmit={async (
          values: Account,
          {setSubmitting}: FormikHelpers<Account>
        ) => {

          let headers = new Headers();
          headers.append("authorization", values.login + ":" + values.password);
          headers.append("Pragma", "no-cache");
          headers.append("Cache-Control", " no-cache, no-store, must-revalidate");

          await fetch(
            'http://localhost:3001/api',
            {
              method: 'GET',
              redirect: 'follow',
              headers: headers
            })
            .then((response: Response) =>{
              if (response.ok){
                alert("Login successful");
                values.login = ""; values.password ="";
              }else
                alert("Invalid username or password, try again");
                values.password ="";
            })
            .catch((error: string) => console.log('error', error));

          setSubmitting(false);
        }}

      >
        <Form className={"SignIn"}>
          <h1>SignIn</h1>
          <br/>
          <Field
            name="login"
            render={({ field = "login" }) => (
              <input {...field} type="text" placeholder="Test login: admin" />
            )}
          />
          <Field
            name="password"
            render={({ field = "password" /* { name, value, onChange, onBlur } */ }) => (
              <input {...field} type="password" placeholder="Test password: admin" />
            )}
          />

          <button className={"button"}  type="submit">SignIn</button>
        </Form>
      </Formik>
    </div>
  );
}
