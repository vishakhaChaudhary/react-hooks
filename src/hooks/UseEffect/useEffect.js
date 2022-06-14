import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Use Effect Example</div>
      <div>
        <h3>Posts</h3>
        <p>{state.title}</p>
      </div>
    </>
  );
};

export default UseEffect;
