import React, { useState } from "react";

const UseState = () => {
  const [inputValue, setInputValue] = useState("Hello World!");

  const handleChange = (event) => {
    const { target } = event || {};
    const { value = "" } = target || {};
    setInputValue(value);
  };
  return (
    <>
      <h3>useState Hook in React</h3>
      <div>Entered Value is: {inputValue}</div>
      <span>
        <input
          placeholder="Enter new value..."
          value={inputValue}
          onChange={handleChange}
        />
      </span>
    </>
  );
};

export default UseState;
