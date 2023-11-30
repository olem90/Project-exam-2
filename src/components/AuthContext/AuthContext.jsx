import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const logIn = (userData) => {
        localStorage.setItem("profile", JSON.stringify(userData));
        
        setLoggedInUser(userData);  
    };

    const logOut = () => {
        localStorage.clear();
        setLoggedInUser(null);
    };

    return (
        <AuthContext.Provider value={{ loggedInUser, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};
