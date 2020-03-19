import React from 'react';
import {Field, Form, Formik, FormikHelpers} from "formik";

export interface Account {
  login: string;
  password: string;
}

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

          let headers = new Headers();
          headers.append("authorization", values.login + ":"+ values.password);
          fetch(
            'http://localhost:3001/api',
            {
              method: 'GET',
              redirect: 'follow',
              headers: headers
            })
            .then((response: Response) => response.text())
            .then((result: string) =>{
              if(result  === "") {
                alert("Неверный пароль, попробуйте снова");
              }else alert("Авторизация успешна");
            })
            .catch((error: string) => console.log('error', error));

          setSubmitting(false);
        }}

      >
        <Form className={"loginForm"}>
          <h1>Signup</h1>
          <br/>
          <Field
            name="login"
            render={({ field = "login" /* { name, value, onChange, onBlur } */ }) => (
              <input {...field} type="text" placeholder="Test login: admin" />
            )}
          />
          <Field
            name="password"
            render={({ field = "password" /* { name, value, onChange, onBlur } */ }) => (
              <input {...field} type="password" placeholder="Test password: admin" />
            )}
          />

          <button className={"button"}  type="submit">Войти</button>
        </Form>
      </Formik>
    </div>
  );
}
