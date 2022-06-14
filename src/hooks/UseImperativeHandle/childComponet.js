import React, { forwardRef, useImperativeHandle, useState } from 'react'

const ChildComponet = forwardRef((props, ref)  => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    handleToggle(){
        setToggle(!toggle);
    }
  }));

  return (
    <>
     {toggle && <span>Child Component</span>}
    </>
  )
})

export default ChildComponet;
