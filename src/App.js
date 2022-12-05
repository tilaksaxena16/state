import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundcolor: 'white'
  })

  const toggle = () => {
    if (myStyle.backgroundColor === 'white',myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
    }else{
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h1> {ctime} </h1>
        <button type="button" onClick={UpdateTime} className="btn btn-primary">Get Time</button>
        <div className="form-check form-switch toggle" onClick={toggle}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label">Enable Dark Mode</label>
        </div>
      </div>
    </>
  )
}

export default App;