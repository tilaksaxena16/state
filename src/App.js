import React, { useState } from "react";
import "./App.css";

const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="container">
        <h1> {count} </h1>
        <button className="button" onClick={IncNum}>click me</button>
      </div>
    </>

  )
}

export default App;