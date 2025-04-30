import React from "react";
import Navbar from "../components/Navbar";
import "../css/check.css";
import { Form, ErrorMessage, Field, Formik } from "formik";

function Check() {
  return (
    <>
      <Navbar />
      <div className="Section">
        <div className="form">
          <Formik>
            <Form>
              <span className="title">Username</span>
              <br />
              <Field type="name" name="username" className="field-area" />
              <ErrorMessage name="username" component="div" />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Check;
