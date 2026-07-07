import React from "react";
import { Bookmark } from "lucide-react";

const Card = (elem) => {
  return (
    <div className="cards">
      <div className="top">
        <img
          src={elem.logo}
          alt=""
        />
        <button>
          Save <Bookmark size={12} />
        </button>
      </div>
      <div className="center">
        <h3>
         {elem.company} <span className="centerSpan">{elem.posted}</span>
        </h3>
        <h2>{elem.designation}</h2>

        <div>
          <h4>{elem.tag1}</h4>
          <h4>{elem.tag2} </h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{elem.salary}</h3>
          <p>{elem.location} </p>
        </div>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Card;
