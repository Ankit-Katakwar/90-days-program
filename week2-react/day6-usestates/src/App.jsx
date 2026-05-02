import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const [tasklist, setTasklist] = useState([
    "bathing ",
    "clothing ",
    "washing ",
  ]);
  const value = (e) => {
    setText(e.target.value);
  };
  const addTask = (taskName) => {
    setTasklist([...tasklist, text]);
    setText("")
    
  };

  const properList = tasklist.map((task, i) => {
    return `${i + 1},The tasks are ${task}`;
  });

  return (
    <div>
      <h3>{text}</h3>
      <input
        id="input"
        onChange={value}
        value={text}
        type="text"
        placeholder="Enter the task"
      />
      <button onClick={addTask}>Add Task</button>

      <h4>{properList}</h4>
    </div>
  );
};

export default App;
