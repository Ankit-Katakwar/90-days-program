import React from "react";

const Cards = (elems) => {
  return (
    <div>
     
      <a href={elems.ankit.url} target="_blank">
        <div className="border-2 h-62 w-45   border-gray-400 rounded-2xl overflow-hidden p-3 text-center  ">
          <img
            className="w-full h-[90%] rounded object-cover "
            src={elems.ankit.download_url}
            alt=""
          />
          <h4 className=" text-sm  mt-2 ">{elems.ankit.author}</h4>
        </div>
      </a>
    </div>
  );
};

export default Cards;
