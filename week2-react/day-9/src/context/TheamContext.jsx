import { createContext, useState } from "react";

export const TheamData = createContext();

const TheamContext = (props) => {
  const [theam, setTheam] = useState('light')
  return <div>
    <TheamData value = {[theam,setTheam]}>{props.children}</TheamData>
  </div>;
};

export default TheamContext;
