import React, { useState } from "react";
import "./App.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return (
    <>
      <div className="container">
        <h1> {ctime} </h1>
        <button className="button" onClick={UpdateTime}>Get Time</button>
      </div>
    </>

  )
}

export default App;