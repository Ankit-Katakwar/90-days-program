import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className=" h-screen lg:flex">
      <form className="lg:w-1/2  h-full p-10 flex flex-col gap-3">
        <h1 className="text-center w-full font-semibold text-3xl mb-2">
          Notes
        </h1>
        <input
          className="w-full border-black border-2 h-15 text-center text-xl font-bold
         "
          type="text"
          placeholder="Enter you title"
        />
        <textarea
          name=""
          className="w-full px-5 py-1 border-black border-2 h-15 font-semibold"
          placeholder="Enter details...."
          id=""
        ></textarea>
        <button className="border-2 border-black font-bold h-10 ">
          Confirm
        </button>
      </form>
      <div className="lg:w-1/2 h-full  p-10 bg-gray-300  lg:flex flex-col gap-3 lg:border-l-2 border-black items-center">
        <h1 className="text-center w-full font-semibold text-3xl mb-2">
          Recent Notes
        </h1>
        <div
          name="container"
          className="h-full lg:w-[90%]  lg:p-5 flex flex-wrap justify-center gap-4 overflow-x-auto"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
