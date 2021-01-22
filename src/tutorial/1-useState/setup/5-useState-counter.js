import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const changeValue = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "decrease") {
      setValue(value - 1);
    } else if (e.target.textContent === "increase") {
      setValue(value + 1);
    } else {
      setValue(0);
    }
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); if you click increase button 3 times it only increases once
      // because each time it looks at old state value
      setValue((prevState) => {
        // here we get the previous state value and add 1
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className="btn"
          onClick={(e) => {
            changeValue(e);
          }}
        >
          decrease
        </button>
        <button
          className="btn"
          onClick={(e) => {
            changeValue(e);
          }}
        >
          reset
        </button>
        <button
          className="btn"
          onClick={(e) => {
            changeValue(e);
          }}
        >
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
