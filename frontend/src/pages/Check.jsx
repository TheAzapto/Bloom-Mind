import React from "react";
import Navbar from "../components/Navbar";
import "../css/check.css";
import Bnt from "../components/Bnt";
import { Form, ErrorMessage, Field, Formik, FormikProps } from "formik";

function Check() {
  return (
    <>
      <Navbar />
      <div className="Section">
        <div className="form">
          <span className="top-header">
            <img src="/favicon-32x32.png" alt="logo" id="fb-img" />
            <span className="inner">
              <h3>Awesome Human Being</h3>
              <p>@Awesomeness</p>
            </span>
            <img src="/image/icons8-verified-48.png" alt="tick" id="veri-img" />
          </span>
          <textarea
            className="field-area"
            placeholder="My Recent Post Said ..."
            id="post"
          />
          <Bnt text="POST" />
        </div>
      </div>
    </>
  );
}

export default Check;
