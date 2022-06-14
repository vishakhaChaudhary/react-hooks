import React, { useRef } from 'react'
import ChildComponet from './childComponet';

const UseImperative = () => {
  const buttonRef = useRef(null);
  
  return (
      <div>
        <h3>Use Imperative Example</h3>
        <button onClick={() => {
            buttonRef.current.handleToggle();
        }}>Parrent Button</button>
        <ChildComponet ref={buttonRef} />
      </div>
  )
}

export default UseImperative;
