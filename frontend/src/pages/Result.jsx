import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/result.css";

function Result() {
  const location = useLocation();
  const result = location.state?.result || "No result available";
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="left-content">
          <h1>
            We Belive you are <span className="result-txt">{result}</span>
          </h1>
          <p className="warning">
            ⚠️ This analysis is not Clinical Report, Consult your Therapist for
            Proffesional Advice
          </p>
        </div>
        <div className="right-content">
          <img src="/image/Meditation.webp" alt="cutie" />
        </div>
      </div>
    </>
  );
}

export default Result;
