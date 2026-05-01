import React from "react";
import Card from "./Card";

const RightContent = (props) => {

  return (
    <div id="right" className="h-full w-2/3 p-6  flex gap-8  overflow-x-auto   ">
      
   {props.user.map((elem ,idx )=>{

   return <Card key={idx} id={idx +1} img= {elem.img} intro = {elem.intro} tag = {elem.tag}  />

   })}
   
     
    </div>
  );
}; 

export default RightContent;
