import React, { useState } from "react";
// useState - function

const UseStateBasics = () => {
  // console.log(useState());
  // const text = useState('random title')[0]
  // const setText = useState('random title')[1]
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
