import React from "react";
import Card from "./components/Card";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="cardParent">
      <Card
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQViHE1jyWgvzJ83bMv64NuRYoXx9um6zWu2deVrbg5OFQInKkzzgqolYI&s"
        name="Ishit"
        profession="Web Developer"
        age={23}
        country="Canada"
      />
      <Card
      img ="https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.jpg"
        name="Prince"
        profession="Berizgar"
        age={49}
        country="USA"
      />
      <Card
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-K7tPMk77r0ptlcA5lrYS-mY17PdRGKRPnx-qqnHGfg&s"
        name="Ankit Katakwar"
        profession="Web Developer"
        age={24}
        country="India"
      />
      
    </div>
    
  );
};

export default App;
