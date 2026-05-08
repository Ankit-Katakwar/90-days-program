import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const apiData = await axios.get("https://picsum.photos/v2/list");
    setdata(apiData.data);
    console.log(apiData.data[1].url);
    console.log(apiData.data);
  };

  return (
    <div className="flex justify-between text-center w-full h-screen">
      {data.map((elems, i) => {
        return (
          <div
              style={{ backgroundImage: `url(${elems.download_url})` }}
              key={i}
              className="h-52 w-52 bg-cover bg-center"
            ></div>
        );
      })}
      <button onClick={getData}>Click me </button>
    </div>
  );
};

export default App;
