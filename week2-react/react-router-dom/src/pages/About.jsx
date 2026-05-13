import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-400 px-6 py-2 rounded m-4"
      >
        back to home
      </button>
      <h1>About</h1>
    </div>
  );
};

export default About;
