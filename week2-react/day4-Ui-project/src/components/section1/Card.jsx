import React from "react";
import CardContent from "./CardContent";

const Card = (props) => {
  console.log(props)
  return (
    <div className=" h-full  w-70 overflow-hidden  rounded-4xl relative shrink-0  ] ">
      <img
        className="h-full w-full object-cover rounded-3xl"
        src={props.img}
        alt=""
      />
      <CardContent id={props.id} tag={props.tag} intro ={props.intro} />
    </div>
  );
};

export default Card;
