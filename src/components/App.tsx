import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import {Account} from "./authorization/IInterface";
import {LoginForm} from "./authorization/LoginForm";


const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default App;
