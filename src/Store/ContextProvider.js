import React, { useState } from "react";
import Context from "./Context";


const ContextProvider = ({children}) => {
    const [sideCartVisible, setSideCartVisible] = useState(false);
    const [allPurchaseCart, setAllPurchaseCart] = useState(0);

    // -------------------------functions------------------------------------ 
    const sideCartVisibleClick = () => {
        setSideCartVisible(true);
    }
    const removeSetSideCard = () => {
        setSideCartVisible(false);
    }
   const value = {
    sideCartVisible,
    sideCartVisibleClick,
    removeSetSideCard,
    allPurchaseCart,
    setAllPurchaseCart
   }
    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default ContextProvider;