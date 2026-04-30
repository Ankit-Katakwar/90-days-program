import React from "react";

const Card = (props) => {
  return (
    
      
      <div className="card">
        <img
          src={props.img}
          alt=""
        />

        <h2>
          {props.name},{props.age}
        </h2>
        <p>{props.profession}</p>
        <p>{props.country}</p>
        <button> View Profile </button>
      </div>
      
    
  );
};

export default Card;
