import axios from "axios";
import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [pageIdx, setPageIdx] = useState(1);

  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageIdx}&limit=30`,
    );
    setUserData(response.data);
  }

  let printUserData = (
    <h3 className="text-sm text-gray-500 w-full text-center min-h-128 flex justify-center items-center">
      Loading.....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((props, idx) => {
      return <Cards key={idx} ankit={props} />;
    });
  }
  useEffect(() => {
    getData();
  }, [pageIdx]);

  return (
    <div className="bg-black min-h-screen w-full text-white p-4 flex items-center justify-center flex-col">
      <div className=" p-4 items-center justify-center  w-full flex gap-4 flex-wrap  min-h-[82%]">
        {printUserData}
      </div>
      <div className="flex justify-center p-4 w-full ">
        <button
          onClick={() =>{
              setUserData([]);
            pageIdx > 1 ? setPageIdx(pageIdx - 1) : setPageIdx(1)}
          }
          className="  bg-amber-500 px-4 py-2  text-black rounded  active:scale-90"
        >
          Prev
        </button>
        <h4 className="p-4 ">{`Page:${pageIdx}`}</h4>
        <button
          onClick={() => {
            setUserData([]);
            setPageIdx(pageIdx + 1);
          }}
          className="  bg-amber-500 px-4 py-2  text-black rounded active:scale-90"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
