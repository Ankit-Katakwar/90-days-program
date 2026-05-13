import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-cyan-300 flex justify-between px-8 py-4 items-center">
      <h2 className=" text-2xl">PRAVARDH</h2>
      <div className="flex gap-12 px-3 text-xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
