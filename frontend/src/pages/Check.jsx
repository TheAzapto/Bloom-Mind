import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../css/check.css";
import Bnt from "../components/Bnt";
import { useNavigate } from "react-router-dom";

function Check() {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput }),
      });

      const data = await response.json();

      navigate("/result", { state: { result: data.result } }); // Update your component state with the result
      // console.log(result);
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  };

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
            value={userInput}
            onChange={handleChange}
            id="post"
          />
          <Bnt text="POST" action={handleSubmission} />
        </div>
      </div>
    </>
  );
}

export default Check;
