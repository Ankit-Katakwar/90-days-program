import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const [list, setlist] = useState([]);

  const getValue = (e) => {
    setText(e.target.value);
  };

  const addTask = (text) => {
    setlist([...list, text]);
    setText("");
  };

  const properList = list.map((task, i) => {
    return ` ${i + 1}: ${task} ,`;
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={getValue}
        placeholder="Enter your task"
      />
      <button
        onClick={() => {
          addTask(text);
        }}
      >
        Add Task
      </button>
      <h3>
        {list.map((task, i) => {
          return  <h3 key={i}>{i+7}. {task}</h3>;
        })}
      </h3>
    </div>
  );
};

export default App;
