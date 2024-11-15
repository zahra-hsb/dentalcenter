'use client';

import { createContext, useState } from "react";


export const UserContext = createContext({
    user: {},
    setUser: () => { }
})

export const GlobalContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    return (
        <UserContext.Provider
            value={{
                user: currentUser,
                setUser: setCurrentUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};