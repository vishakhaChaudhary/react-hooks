import React, { useRef, useLayoutEffect, useEffect } from 'react';

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  /* This will always run before the DOM is printed to the screen*/
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    inputRef.current.value = "Hello World!"
  }, []);


  /* This will always execute after the page rendered*/
  useEffect(() => {
    console.log("useEffect");
    inputRef.current.value = "Welcome to React Hooks";
  }, []);

  return (
    <>
        <div>useLayoutEffect</div>
        <input type="text" ref={inputRef} />
    </>
  )
}

export default UseLayoutEffect;
