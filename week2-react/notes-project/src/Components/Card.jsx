import React from "react";
import { X } from 'lucide-react';

const Card = (props) => {

  
  return (
    <div   className=' relative h-58 w-48 bg-cover rounded-xl p-4 bg-[url("https://imgs.search.brave.com/0URcI9QeB20KSXJcNsLG9ZSyWOYKDXMQXWO0HwVINbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n")]'>
      <h4 onClick={()=>props.delete(props.idx)} className="absolute top-8 right-2 hover:text-red-500 hover:scale-125  "><X size={16}  /></h4>
      <h3 className="font-bold mb-2.5 text-black py-4  ">{props.title}</h3>
      <p className=" font-semibold   text-sm pr-3 text-gray-500 ">
        {props.details}
      </p>
    </div>
  );
};

export default Card;
