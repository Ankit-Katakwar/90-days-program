import React, { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title.length <= 15 && details.length <= 70) {
      setTask([...task,{title,details}]);
      setTitle("");
      setDetails("");
      console.log(task);
    } else {
      alert("Total words exceeded.  ");
    }
  };

  

  return (
    <div className=" h-screen lg:flex">
      <form className="lg:w-1/2  h-full p-10 flex flex-col gap-3">
        <h1 className="text-center w-full font-semibold text-3xl mb-2">
          Notes
        </h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="w-full border-black border-2 h-15 text-center text-xl font-bold
         "
          type="text"
          placeholder="Enter you title"
        />
        <textarea
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          value={details}
          className="w-full px-5 py-1 border-black border-2 h-15 font-semibold"
          placeholder="Enter details here...."
          id=""
        ></textarea>
        <button
          onClick={onSubmit}
          className="border-2 border-black font-bold h-10 active:scale-90 hover:bg-gray-300 "
        >
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
          {task.map((props, idx) => {
            return (
              <Card key={idx} delete={deleteNote} idx={idx} title={props.title} details={props.details} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
