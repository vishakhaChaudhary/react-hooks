import React, { createContext, useState } from 'react';
import Login from './login';
import User from './user';

export const AppContext = createContext(null);

const UseContext = () => {
    const [userName, setUsername] = useState("");
    return (
        <AppContext.Provider value={{userName, setUsername}}>
            <h3>Use Context Example</h3>
            <Login />
            {userName && <User />}
        </AppContext.Provider>
  )
}

export default UseContext;
