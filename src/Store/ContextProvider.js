import React, { createContext, useState } from "react";

export const allcontexts = createContext();

const ContextProvider = ({children}) => {
    const [sideCartVisible, setSideCartVisible] = useState(false);
    const sideCartVisibleClick = () => {
        setSideCartVisible(!sideCartVisible);
    }
   const value = {
    sideCartVisible,
    sideCartVisibleClick
   }
   console.log(value);
    return(
        <allcontexts.Provider value={value}>{children}</allcontexts.Provider>
    )
}

export default ContextProvider;