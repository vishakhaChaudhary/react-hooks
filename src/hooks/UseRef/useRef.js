import React, { useRef, useState } from 'react'

const UseRef = () => {
  const inputRef = useRef(null);
  const[value, setValue] = useState("Vishakha");

  const onClick = () => {
    setValue(inputRef.current.value);
  }

  return (
    <>
        <h3>UseRef Example</h3>
        <h3>Current Value: {value}</h3>
        <input type="text" placeholder='Enter the value' ref={inputRef} />
        <button onClick={onClick}>Submit</button>
    </>
  )
}

export default UseRef;
