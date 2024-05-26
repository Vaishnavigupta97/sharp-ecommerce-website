import React, {useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn:false,
    login: (token) =>{},
    logout: () => {}
});

export const AuthContextProvider = (propps) => {
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    const loginHandler = () => {
        setToken(token);
    };
    const logOutHandler = () => {
        setToken(null);
    }
    const contextValue = {
        token : '',
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logOutHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>{propps.children}</AuthContext.Provider>
    )
}

export default AuthContext;