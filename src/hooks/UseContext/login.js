import React, { useContext } from "react";
import { AppContext } from "./useContext";

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <>
      <input
        type="text"
        placeholder="Enter the username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </>
  );
};

export default Login;
