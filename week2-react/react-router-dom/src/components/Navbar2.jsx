import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-6 py-3 bg-red-300 justify-center gap-10">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
