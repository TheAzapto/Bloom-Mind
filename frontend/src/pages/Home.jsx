import React from "react";
import Navbar from "../components/Navbar";
import "../css/home.css";
import Bnt from "../components/Bnt";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/check`;
    navigate(path);
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="Content">
        <div className="text-area">
          <p>Your Mental Health Matters</p>
          <Bnt text="Find Out" action={routeChange} />
        </div>
        <div className="img-win">
          <img src="/image/Meditation.webp" alt="a cutie" />
        </div>
      </div>
    </>
  );
}

export default Home;
