import React, { useContext } from "react";
import { TheamData } from "../context/TheamContext";



const Nav2 = () => {
  const [theam,setTheam] = useContext(TheamData)
  return (
    <div className="flex gap-8 text-xl">
      <h3>Home</h3>
      <h3>About Us</h3>
      <h3>Product</h3>
      <h3>Contact</h3>
      <h3>{theam}</h3>
    </div>
  );
};

export default Nav2;
