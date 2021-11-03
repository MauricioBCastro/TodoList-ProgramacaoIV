import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

const Login = () => {
  const handleSubmit = (values) => {
    axios.post("http://localhost:8080/v1/api/auth", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("app-token", data);
        history.push("/");
      }
    });
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });
  return (
    <>
      <h1>Login</h1>
      <p>Fill the fields to continue</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        <Form className="Login">
          <div className="Login-Group">
            <Field
              name="email"
              className="border border-gray-800 rounded w-full py-2 px-3 mr-4 text-black"
              size="small"
              id="filled-hidden-label-normal"
              label="Login"
              variant="filled"
            />
            <ErrorMessage
              component="span"
              name="email"
              className="Login-Error"
            />
          </div>
          <div className="Login-Group">
            <Field
              name="password"
              className="border border-gray-800 rounded w-full py-2 px-3 mr-4 text-black"
              size="small"
              id="filled-hidden-label-normal"
              label="password"
              variant="filled"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="Login-Error"
            />
          </div>
          <button className="bg-gray-900 hover:bg-gray-300" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
